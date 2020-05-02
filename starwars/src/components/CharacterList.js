import React from "react";
import {Container, Card, CharacterName, Image, Text} from "./Styles";

const CharacterList = (props) => {
    return (
        <div>
            <Container>
                <Card>
                    <CharacterName>{props.name}</CharacterName>
                    <Image src = {props.image} alt = {props.name} />
                    <Text>Species: {props.species}</Text>
                    <Text>Status: {props.status}</Text>
                </Card>
            </Container>
    </div>
    )
}

export default CharacterList;