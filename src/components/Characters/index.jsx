import { useEffect, useState } from "react"
import CharacterDetail from "../CharacterDetail"

export default function Characters() {
    const [characters, setCharacters] = useState([])
    const [next, setNext] = useState('')
    const [prev, setPrev] = useState('')

    // Gets people from the API. Has an optional url param, so by default it fetches the first page
    function getPeople(url = 'https://swapi.dev/api/people') {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCharacters(data.results)
                // This section is for the next/prev buttons (we call it pagination)
                // The next/prev state are set to either the links the API returns, or empty strings
                // The ?? basically means that if the thing before ?? exists, use it, other wise use the thing after the ??
                setNext(data.next ?? '')
                setPrev(data.previous ?? '')
            })
    }

    useEffect(() => {
        getPeople()
    }, [])

    return (
        <>
            <div className="w-3/4 mx-auto grid grid-cols-2 gap-2 mt-5">
                {characters.map(character => <CharacterDetail 
                                                key={character.name}
                                                name={character.name} 
                                                hair={character.hair_color} 
                                                height={character.height} 
                                                birth={character.birth_year}
                                                homeworld={character.homeworld}
                                                films={character.films}
                                                mass={character.mass}
                                                gender={character.gender}
                                                skin={character.skin_color}
                                                />)}
            </div>
            <div className="flex justify-between">
                {/* Conditionally render the next/prev buttons based on the state */}
                {/* And adds an event listener to getPeople passing in the next/prev links saved in state*/}
                {prev !== '' && <button onClick={() => getPeople(prev)}>Previous</button>}
                {next !== '' && <button onClick={() => getPeople(next)}>Next</button>}
            </div>
        </>
    )
}