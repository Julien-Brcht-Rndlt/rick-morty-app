import { useState, useEffect } from 'react'
import { useParams , Link } from 'react-router-dom'
import axios from 'axios'
import { CircularProgress } from '@material-ui/core'

export default function CharacterDetail() {

    const [characterDetail, setCharacterDetail] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const { id } = useParams();

    useEffect(() => {
        const getCharacterDetailData = async () => {
            try{
                const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
                setCharacterDetail(response.data)
            } catch (err) {
                console.error(`Error: ${err.message}, while fecthing data from API`)
            } finally {
                setIsLoading(false)
            }
        }
        setIsLoading(true)
        setTimeout(getCharacterDetailData, 2000)
    }, [id])

    if(isLoading) return <CircularProgress/>

    return(
        <>
            <Link to="/characters">Back Characters List</Link>
            <h1>Character Detail of {characterDetail.id}</h1>
            <div> 
                <span>Character name: {characterDetail.name}</span>
            </div>
            <div>
                <img src={characterDetail.image} alt={`${characterDetail.name} - ${characterDetail.image}`}/>
                <span>{characterDetail.gender}</span>
                <span>{characterDetail.species}</span>
                <span>{characterDetail.status}</span>
                <p>Watch me in the following episodes:</p>
                    <ol>
                {
                    characterDetail.episode && characterDetail.episode.length > 0 &&
                        characterDetail.episode.map((episode, index) => {
                            return(
                                <li key={index}>
                                    <a href={episode}>
                                        {episode.slice(episode.indexOf('episode'),episode.length).replace('/', ' ')}
                                    </a>
                                </li>
                            )
                        })
                }
                    </ol>
            </div>
        </>
    )
}