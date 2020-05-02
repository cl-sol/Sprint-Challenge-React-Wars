import styled from "styled-components";

const Container = styled.div`
    width: 175vh;
    height: 100%;
    margin: 0 5%;
`;

const Card = styled.div`
    border: 3px solid black;
    width: 50vh;
    height: 50vh;
    margin: 1% 5%;
`;

const CharacterName = styled.p`
    width: 50vh;
    height: 10vh;
    font-size: 2em;
    margin: 1% 0;
`;

const Image = styled.img`
    width: 50%;
    &:hover {
        opacity: 0.5;
    }
`;

const Text = styled.p`
    width: 100%;
`;

export {Container, Card, CharacterName, Image, Text};