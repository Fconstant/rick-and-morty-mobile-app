import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { List, Spinner, Text } from "@ui-kitten/components";

import ScreenScaffold from "../../component/ScreenScaffold";
import { Actions, CharacterMetaState } from "../../store/character.store";
import CharacterCard from "./CharacterCard";
import { ListRenderItemInfo } from "react-native";

interface CharacterScreenNavProp extends AppScreenProps<"characters"> {}

const CharactersScreen: React.FC<CharacterScreenNavProp> = (props) => {
  const [nextPage, setNextPage] = useState(1);
  const dispatch = useDispatch();

  const characters = useSelector<AppReduxStore, Character[]>(
    (state) => state.characters.items
  );
  const metadata = useSelector<AppReduxStore, CharacterMetaState>(
    (state) => state.characters.meta
  );

  useEffect(() => {
    dispatch(Actions.LOAD_CHARACTERS({ page: nextPage }));
  }, [nextPage]);

  const loadMoreContent = () => {
    if (!metadata.loading && nextPage + 1 <= metadata.pageCount) {
      setNextPage(nextPage + 1);
    }
  };

  const renderFooter = () => {
    return metadata.loading ? (
      <Spinner size="small" />
    ) : metadata.pageCount === nextPage ? (
      <Text appearance='hint'>It looks like you've reached the final of the list</Text>
    ) : null;
  };

  return (
    <ScreenScaffold title="Rick & Morty">
      <List
        nestedScrollEnabled
        data={characters}
        keyExtractor={(item) => item.id}
        renderItem={(info: ListRenderItemInfo<Character>) => {
          return <CharacterCard key={info.item.id} character={info.item} />;
        }}
        onEndReached={loadMoreContent}
        onEndReachedThreshold={0.2}
        ListFooterComponent={renderFooter}
      />
    </ScreenScaffold>
  );
};

export default CharactersScreen;
