import React from "react";
import { Card, Avatar, Text } from "@ui-kitten/components";
import { View } from "react-native";

export interface CharacterCardProps {
  character: Character;
  onPress: () => void;
}

const CharacterCard: React.FC<CharacterCardProps> = (props) => {
  const { name, image } = props.character;
  return (
    <Card style={{ marginVertical: 8 }} onPress={props.onPress}>
        <Avatar source={{ uri: image }} size="large" />
        <Text category="h4">{name}</Text>
    </Card>
  );
};

export default CharacterCard;
