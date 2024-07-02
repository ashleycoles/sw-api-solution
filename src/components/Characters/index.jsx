import { useEffect, useState } from "react"
import CharacterDetail from "../CharacterDetail"

export default function Characters() {
    const [characters, setCharacters] = useState([])
    const [next, setNext] = useState('')
    const [prev, setPrev] = useState('')

    function getPeople(url = 'https://swapi.dev/api/people') {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCharacters(data.results)
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
                {prev !== '' && <button onClick={() => getPeople(prev)}>Previous</button>}
                {next !== '' && <button onClick={() => getPeople(next)}>Next</button>}
            </div>
        </>
    )
}