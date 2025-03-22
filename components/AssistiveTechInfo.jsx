export default function AssistiveTechInfo({pokemonsData, matchedCards}) {
    return (
        <div className="tech-info-wrapper" aria-live="polite" aria-atomic="true">
            <h2>Game Status</h2>
            <div>
                <div>
                    <span>Number of matched pairs</span>
                    <b>
                        {matchedCards.length}
                    </b>
                </div>
                <div>
                    <span>Number of cards left to match</span>
                    <b>
                        {pokemonsData.length - matchedCards.length}
                    </b>
                </div>
            </div>
        </div>
    )
}