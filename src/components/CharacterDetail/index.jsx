import { useState } from "react";
import CharacterExtra from "../CharacterExtra";
import Film from "../Film";
import Homeworld from "../Homeworld";

export default function CharacterDetail({name, height, hair, birth, homeworld, films, mass, gender, skin}) {
    // Used to conditionally render the extra info box. Gets toggled by an event listener on the button
    const [showingExtra, setShowingExtra] = useState(false)
    
    return (
        <div className="border p-5">
            <h2 className="text-2xl">{ name }</h2>
            <p>Height: { height }</p>
            <p>Hair colour: { hair }</p>
            <p>Born in { birth }</p>

            <h2 className="text-xl my-5 ">Homeworld</h2>
            {/* Pass the api link to get the homeworld in */}
            <Homeworld homeworld={homeworld} />

            <h2 className="text-xl mt-5">Film appearances</h2>
            <div className="grid grid-cols-2 gap-2 mt-5">
                {/* Films is an array in the JSON, so loop through each one and pass the link for the film in */}
                {films.map(film => <Film key={film} film={film} />)}
            </div>

            <button className="bg-red-400 px-3 py-1 mt-5" onClick={() => setShowingExtra(!showingExtra)}>Show extra</button>

            {showingExtra && <CharacterExtra mass={mass} gender={gender} skin={skin} />}
        </div>
    )
}