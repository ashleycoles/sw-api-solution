export default function CharacterExtra({mass, gender, skin}) {
    return (
        <div>
            <p>Weighs {mass}</p>
            <p>{gender} - {skin}</p>
        </div>
    )
}