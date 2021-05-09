import { Link } from 'react-router-dom'

export default function Home() {

    return(
        <>
            <h1>{'Welcome to Rick & Morty App!'}</h1>
            <Link to="/characters">Show all characters</Link>
        </>
    )
}