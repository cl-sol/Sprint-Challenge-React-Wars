// Write your Character component here
import React, {useState} from "react";

import axios from "axios";

const Character = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/25/")
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    })

return (
    <div>
        Test
    </div>
)
}

export default Character;