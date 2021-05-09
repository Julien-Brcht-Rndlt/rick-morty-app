import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
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
            <h2>Character Detail</h2>
        </>
    )
}