import {
  createReducer,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import {
  Character,
  getCharacters,
  GetCharactersReturn,
} from "../service/character.service";

// Types
type LoadCharactersPayload = {
  page: number;
} | undefined

// Actions
const _ACTION_KEY = "@characters";

const LOAD_CHARACTERS = createAsyncThunk<
  GetCharactersReturn,
  LoadCharactersPayload
>(
  `${_ACTION_KEY}/load`,
  async (payload, api) => {
    api.dispatch(SET_LOADING(true))
    const response = await getCharacters(payload?.page ?? 1);
    return response
  }
);
const SET_LOADING = createAction<boolean>(`${_ACTION_KEY}/set_loading`)

// Reducer and state

const INITIAL_STATE = {
  items: [] as Character[],
  meta: {
    loading: false,
    pageCount: -1
  }
};

export type CharacterListState = typeof INITIAL_STATE;
export type CharacterMetaState = CharacterListState['meta']

export const charactersReducer = createReducer(INITIAL_STATE, (builder) =>
  builder
    .addCase(SET_LOADING, (state, action) => {
      state.meta.loading = action.payload ?? true
    })
    .addCase(LOAD_CHARACTERS.fulfilled, (state, action) => {
      const { info, results } = action.payload
      state.items = [ ...state.items, ...results ];
      state.meta = {
        pageCount: info.pages,
        loading: false,
      }
    })
);

export const Actions = {
  LOAD_CHARACTERS,
  SET_LOADING
}

export default charactersReducer;
