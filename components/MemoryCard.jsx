import PokemonButton from "./PokemonButton"

export default function MemoryCard({ handleClick, data, selectedCards, matchedCards, accentColor }) {
    
    const pokemonEl = data.map((pokemon, index) =>{
            const selectedCardEntry = selectedCards.find(pokemon => pokemon.index == index)
            const matchedCardEntry = matchedCards.find(pokemon => pokemon.index == index)

            return (
                <li key={index}>
                    <PokemonButton
                        pokemon={pokemon}
                        accentColor={accentColor}
                        handleClick={() => handleClick(pokemon.name, index)}
                        selectedCardEntry={selectedCardEntry}
                        matchedCardEntry={matchedCardEntry}
                        index={index}
                    />
                </li>
            )
        }
    )
    
    return <ul>{pokemonEl}</ul>
}