export default function PokemonButton({pokemon, handleClick, selectedCardEntry, matchedCardEntry, index, accentColor}){
    const cardBack = 
        <>
            <span>
                {pokemon.name}
            </span>
            <img src={pokemon.img} style={{imageRendering:"pixelated"}} />
        </>

    const cardStyle = matchedCardEntry ? {opacity: .2} : selectedCardEntry ?  {color: accentColor} : {backgroundColor: accentColor, color: 'white'}

    const btnAria = 
        matchedCardEntry ? `${pokemon.name}. Matched.` : 
        selectedCardEntry ? `${pokemon.name}. Not matched yet.` :
        "Card upside down"

        return (
        <button
            style={cardStyle}
            className="pokemon-card"
            onClick={selectedCardEntry ? null : handleClick}
            disabled={matchedCardEntry}
            aria-label={`Position ${index + 1} ${btnAria}`}
            aria-live="polite"
        >
            {selectedCardEntry || matchedCardEntry ? cardBack : "?"}
        </button>
    )
}