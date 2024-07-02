import { useEffect, useState } from "react"

export default function Film({film}) {
    const [title, setTitle] = useState('')
    const [director, setDirector] = useState('')
    const [year, setYear] = useState('')

    // Like the homeworld, this component is responsible for fetching it's own data
    useEffect(() => {
        fetch(film)
            .then(res => res.json())
            .then(data => {
                setTitle(data.title)
                setDirector(data.director)
                setYear(data.release_date)
            })
    }, [])

    return (
        <div className="border p-2">
            <h3>{title} - {year}</h3>
            <p>Directed by: {director}</p>
        </div>
    )
}