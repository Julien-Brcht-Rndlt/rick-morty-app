import { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from '@material-ui/core'; //instal material UI core: npm install @material-ui/core
import axios from 'axios' //install axios: npm install axios
import CharacterCard from './CharacterCard' //install Icon dependencies: npm install @material-ui/icons

export default function CharacterList({ isActive, handler }) {

    //Rick & Morty API: //https://rickandmortyapi.com/

    const [characterList, setCharacterList] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    /* useEffect(() => {

        axios.get('https://rickandmortyapi.com/api/character')
            .then((response) => response.data)
            .then((data) => setCharacterList(data.results))
            .catch((err) => {
                console.error(`Error: ${err.message}, while requesting Rick & Morty API`)
            })
    }, []) */

    /* useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then((response) => setCharacterList(response.data.results))
            .catch((err) => {
                console.error(`Error: ${err.message}, while requesting Rick & Morty API`)
            })
    }, []) */
             
    /*const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const getCharactersData = async () => {
            try {
                setIsLoading(true)
                const response = await axios.get('https://rickandmortyapi.com/api/character')
                setCharacterList(response.data.results)
            } catch(err) {
                console.error(`Error: ${err.message}, while requesting Rick & Morty API`)  // err.response or err.message
            } finally {
                setIsLoading(false)
            }
        }
        getCharactersData()
    }, []) */


    useEffect(() => {
        const getCharactersData = async () => {
            try {
                const response = await axios.get('https://rickandmortyapi.com/api/character')
                setCharacterList(response.data.results)
            } catch(err) {
                console.error(`Error: ${err.message}, while requesting Rick & Morty API`)  // err.response or err.message
            } finally {
                setIsLoading(false)
            }
        }
        setTimeout(getCharactersData, 2000)
    }, [])

    console.log('fetch data', characterList)

    if(isLoading) return <CircularProgress />

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'space-between', justifyContent: 'center'}}>
            {
                isActive ? (
                    <Button color="secondary" onClick={() => handler()}>Clicked!</Button>
                ) : (
                    <Button color="primary" onClick={() => handler()}>Click Me!</Button>
                )
            }
}
            {
                characterList.length > 0 && characterList !== 0 && (
                    characterList.map((character) => {
                        return(
                                <CharacterCard 
                                    key={character.id}
                                    id={character.id}
                                    name={character.name}
                                    status={character.status}
                                    species={character.species}
                                    gender={character.gender}
                                    image={character.image}
                                />
                        )
                    })
                )
            }

</div>
    )
}