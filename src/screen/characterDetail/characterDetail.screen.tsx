import React from "react";

import ScreenScaffold from "../../component/ScreenScaffold";
import { Avatar, Card, Divider, Text } from "@ui-kitten/components";

interface CharacterDetailScreenNavProp
  extends AppScreenProps<"characterDetail"> {}

const createInfoHeader = (title: string) => () => {
  return <Text category="h6" style={{ fontWeight: 'bold', padding: 8, textAlign: 'center' }}>{title}</Text>;
};

export const CharacterDetailScreen: React.FC<CharacterDetailScreenNavProp> = (
  props
) => {
  const char = props.route.params.character;
  return (
    <ScreenScaffold title={char.name}>
      <Avatar
        source={{ uri: char.image }}
        style={{ width: 150, height: 150 }}
        size="giant"
      />

      <Divider style={{ marginVertical: 10 }}/>

      <Card status="primary" style={{ width: '50%' }} header={createInfoHeader("Gender")}>
        <Text style={{ textAlign: 'center' }}>{char.gender}</Text>
      </Card>

      <Divider style={{ marginVertical: 10 }}/>

      <Card status="basic" style={{ width: '50%' }} header={createInfoHeader("Species")}>
        <Text style={{ textAlign: 'center' }}>{char.species}</Text>
      </Card>
      
      
      <Divider style={{ marginVertical: 10 }}/>

      <Card status="success" style={{ width: '50%' }} header={createInfoHeader("Status")}>
        <Text style={{ textAlign: 'center' }}>{char.status}</Text>
      </Card>
      
    </ScreenScaffold>
  );
};

export default CharacterDetailScreen;
