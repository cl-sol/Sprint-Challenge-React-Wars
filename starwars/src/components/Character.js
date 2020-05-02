// Write your Character component here
import React, {useState, useEffect} from "react";
import axios from "axios";

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect( () => {
        axios.get("https://rickandmortyapi.com/api/character/")
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div>test</div>
    );
}

export default Characters;
