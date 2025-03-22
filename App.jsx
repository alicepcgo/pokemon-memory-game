import { useEffect, useState } from 'react'
import Form from '/components/Form'
import MemoryCard from '/components/MemoryCard'
import AssistiveTechInfo from './components/AssistiveTechInfo'
import GameOver from './components/GameOver'
import {pokemon, pokemonTypeColors} from './data/data';

export default function App() {
    const [formData, setFormData] = useState({category:"Normal", number: 10})
    const [isGameOn, setIsGameOn] = useState(false)
    const [pokemonsData, setPokemonsData] = useState([])
    const [selectedCards, setSelectedCards] = useState([])
    const [matchedCards, setMatchedCards] = useState([]) 
    const [areAllCardsMatched, setAreAllCardsMatched] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        if (selectedCards.length == 2 && selectedCards[0].name === selectedCards[1].name) {
            setMatchedCards(prevMatchedCards => [...prevMatchedCards, ...selectedCards])            
        }
    }, [selectedCards])

    useEffect(() => {
        if (pokemonsData.length && matchedCards.length === pokemonsData.length) {
            setAreAllCardsMatched(true)
        }
    }, [matchedCards])

    async function startGame() {
        const data = pokemon.filter(({type})=> type.includes(formData.category))
        console.log(data.length);
        
        const dataSlice = getDataSlice(data)
        const pokemonsArray = getPokemonArray(dataSlice)
        setPokemonsData(pokemonsArray);
        setIsGameOn(true)
    }

    function getPokemonArray(data){
        return [...data, ...data].map(item => {return {item, sort: Math.random()}}).sort((a,b) => a.sort - b.sort).map(({item}) => item)
    }

    function getDataSlice(data) {
        /* TODO selecionar items unicos */
        return Array(formData.number / 2).fill(null).map( i => data[Math.round(Math.random() * data.length)])
    }
    
    async function turnCard(name, index) {
        if (selectedCards.length < 2) {
            setSelectedCards(prevSelectedCards => [...prevSelectedCards, { name, index }])
        } else if (selectedCards.length === 2) {
            setSelectedCards([{ name, index }])
        }
        
    }

    function resetGame(){
        setIsGameOn(false)
        setSelectedCards([])
        setMatchedCards([])
        setAreAllCardsMatched(false)
    }

    function resetError(){
        setIsError(false)
    }

    function handleFormChange({target}){
        setFormData(prevFormData => ({...prevFormData, [target.name]: target.value}))
    }
    return (
        <main>
            <div>
                {!isGameOn && <Form handleSubmit={startGame} handleChange={handleFormChange} />}
                {isGameOn && !areAllCardsMatched && <AssistiveTechInfo pokemonsData={pokemonsData} matchedCards={matchedCards}/>}
                {areAllCardsMatched && <GameOver handleSubmit={resetGame} />}

            </div>
            <div>
                {isGameOn && 
                    <MemoryCard 
                        data={pokemonsData}
                        handleClick={turnCard} 
                        selectedCards={selectedCards}
                        matchedCards={matchedCards}
                        accentColor={pokemonTypeColors[formData.category]}
                    />}
            </div>
        </main>
    )
}