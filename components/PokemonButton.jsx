export default function PokemonButton({pokemon, handleClick, selectedCardEntry, matchedCardEntry, index}){
    const cardBack = 
        <>
            <span style={{fontSize: 8}}>
                {pokemon.name}
            </span>
            <img src={pokemon.img} style={{imageRendering:"pixelated"}} />
        </>

    const btnStyle = matchedCardEntry ? "btn--pokemon__back--matched" :
        selectedCardEntry ? "btn--pokemon__back--selected" :
        "btn--pokemon__front"
    
    const btnAria = 
        matchedCardEntry ? `${pokemon.name}. Matched.` : 
        selectedCardEntry ? `${pokemon.name}. Not matched yet.` :
        "Card upside down"
    return (
        <button
            className={`btn btn--pokemon ${btnStyle}`}
            onClick={selectedCardEntry ? null : handleClick}
            disabled={matchedCardEntry}
            aria-label={`Position ${index + 1} ${btnAria}`}
            aria-live="polite"
        >
            {selectedCardEntry || matchedCardEntry ? cardBack : "?"}
        </button>
    )
}