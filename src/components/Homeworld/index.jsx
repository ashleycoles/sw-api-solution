import { useEffect, useState } from "react"

export default function Homeworld({homeworld}) {
    const [name, setName] = useState('')
    const [climate, setClimate] = useState('')
    const [population, setPopulation] = useState('')


    // This component is responsible for fetching it's own data
    useEffect(() => {
        fetch(homeworld)
            .then(res => res.json())
            .then(data => {
                setName(data.name)
                setClimate(data.climate)
                // .toLocaleString() is used to format the number. parseInt is needed because the API returns
                // population as a string. toLocaleString() only works on a number
                setPopulation(parseInt(data.population).toLocaleString())
            })
    }, [])
    return (
        <div className="border p-2">
            <h3>{name} - {climate}</h3>
            <p>Population: {population}</p>
        </div>
    )
}