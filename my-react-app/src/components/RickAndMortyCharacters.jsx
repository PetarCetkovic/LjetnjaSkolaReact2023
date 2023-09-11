import { useState, useEffect } from "react"
import { Card } from "./Card"

export const RickAndMortyCharacters = () => {
    const [characters, setCharacters] = useState([])

    const handleFetchCharacters = async () => {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character")
            const data = await response.json()

            setCharacters(data.results)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleFetchCharacters()
    }, [])

    return <>
        {characters.map(({name,status,image,location, url}, index) => <Card key={index} name={name} status={status} image={image} location={location} url={url}/>)}
    </>
}