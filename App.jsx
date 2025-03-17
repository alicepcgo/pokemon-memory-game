import { useEffect, useState } from 'react'
import Form from '/components/Form'
import MemoryCard from '/components/MemoryCard'
import AssistiveTechInfo from './components/AssistiveTechInfo'
import GameOver from './components/GameOver'
import ErrorCard from './components/CardError'

export default function App() {

    const [formData, setFormData] = useState({category:"animals%20and%20nature", number: 10})
    const [isGameOn, setIsGameOn] = useState(false)
    const [emojisData, setEmojisData] = useState([])
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
        if (emojisData.length && matchedCards.length === emojisData.length) {
            setAreAllCardsMatched(true)
        }
    }, [matchedCards])

    async function startGame(e) {
        e.preventDefault()
        
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/emojis?category=${formData.category}`)
            
            if (!response.ok) {
                throw new Error("Could not fetch data from API")
            }
            
            const data = await response.json()
            const dataSlice = getDataSlice(data)
            const emojisArray = getEmojiArray(dataSlice)
            setEmojisData(emojisArray);
            setIsGameOn(true)
        } catch(err) {
            console.error(err)
            setIsError(true)
        }   
    }

    function getEmojiArray(data){
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
            <h1>Memory</h1>
            {!isGameOn && <Form handleSubmit={startGame} handleChange={handleFormChange} />}
            {isGameOn && !areAllCardsMatched && <AssistiveTechInfo emojisData={emojisData} matchedCards={matchedCards}/>}
            {areAllCardsMatched && <GameOver handleSubmit={resetGame} />}
            {isGameOn && 
                <MemoryCard 
                    data={emojisData}
                    handleClick={turnCard} 
                    selectedCards={selectedCards}
                    matchedCards={matchedCards}
                />}
            {isError && <ErrorCard handleSubmit={resetError} />}
        </main>
    )
}