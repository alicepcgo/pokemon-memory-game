import PokemonButton from "./PokemonButton"

export default function MemoryCard({ handleClick, data, selectedCards, matchedCards }) {
    
    const pokemonEl = data.map((pokemon, index) =>{
            const selectedCardEntry = selectedCards.find(pokemon => pokemon.index == index)
            const matchedCardEntry = matchedCards.find(pokemon => pokemon.index == index)

            const cardStyle = matchedCardEntry ? "card-item--matched" : selectedCardEntry ? "card-item--selected" : ""
            return (
                <li key={index} className={`card-item ${cardStyle}`}>
                    <PokemonButton
                        pokemon={pokemon}
                        style="btn btn--pokemon"
                        handleClick={() => handleClick(pokemon.name, index)}
                        selectedCardEntry={selectedCardEntry}
                        matchedCardEntry={matchedCardEntry}
                        index={index}
                    />
                </li>
            )
        }
    )
    
    return <ul className="card-container">{pokemonEl}</ul>
}