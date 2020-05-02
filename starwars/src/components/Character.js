// Write your Character component here
import React, {useState, useEffect} from "react";
import axios from "axios";
import CharacterList from "./CharacterList";

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect( () => {
        axios.get("https://rickandmortyapi.com/api/character/")
        .then(response => {
            console.log(response);
            setCharacters(response.data.results);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div>
            {characters.map(character => {
                return (
                    <CharacterList key={character.id}
                    name = {character.name}
                    image = {character.image}
                    species = {character.species}
                    status = {character.status}
                    />
                )
            })}
            test</div>
    );
}

export default Characters;
