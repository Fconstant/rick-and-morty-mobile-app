import React from 'react'
import { Card, Avatar, Text } from '@ui-kitten/components'

export interface CharacterCardProps {
    character: Character
}

const CharacterCard: React.FC<CharacterCardProps> = (props) => {
    const { name, image } = props.character
    return (
        <Card>
            <Avatar source={{ uri: image }}/>
            <Text category='h3'>
                {name}
            </Text>
        </Card>
    )
}

export default CharacterCard