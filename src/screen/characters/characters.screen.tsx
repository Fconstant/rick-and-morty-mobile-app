import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List, Spinner, Text } from "@ui-kitten/components";

import ScreenScaffold from "../../component/ScreenScaffold";
import { Actions, CharacterMetaState } from "../../store/character.store";
import CharacterCard from "./CharacterCard";
import { ListRenderItemInfo, View, VirtualizedList } from "react-native";
import { FlatList } from "react-native-gesture-handler";

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

  const onSelectChar = (character: Character) => () => {
    props.navigation.navigate("characterDetail", { character });
  };

  const renderFooter = () => {
    return (
      <View key="footer__" style={{ alignContent: 'center', padding: 8, justifyContent: 'center', width: '100%', flex: 1 }}>
        {metadata.loading ? (
          <Spinner size="large" />
        ) : metadata.pageCount === nextPage ? (
          <Text appearance="hint">
            It looks like you've reached the final of the list
          </Text>
        ) : null}
      </View>
    );
  };

  return (
    <ScreenScaffold title="Rick & Morty">
      <List
        nestedScrollEnabled
        data={characters}
        keyExtractor={(item) => item.id}
        renderItem={(info: ListRenderItemInfo<Character>) => {
          return (
            <CharacterCard
              onPress={onSelectChar(info.item)}
              key={`${info.item.id}_${info.index}`}
              character={info.item}
            />
          );
        }}
        onEndReached={loadMoreContent}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
    </ScreenScaffold>
  );
};

export default CharactersScreen;
