export default function AssistiveTechInfo({pokemonsData, matchedCards}) {
    return (
        <section className="sr-only" aria-live="polite" aria-atomic="true">
            <h2>Game Status</h2>
            <p>Number of matched pairs: {matchedCards.length}</p>
            <p>Number of cards left to match: {pokemonsData.length - matchedCards.length}</p>
        </section>
    )
}