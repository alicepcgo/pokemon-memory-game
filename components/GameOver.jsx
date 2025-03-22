import { useEffect, useRef } from "react";
import RegularButton from "./RegularButton";

export default function GameOver({handleSubmit}){

    const divRef = useRef(null)

    useEffect(() => {
        divRef.current.focus()
    }, [])
    return (
        <div className="tech-info-wrapper" ref={divRef} tabIndex={-1}>
            <span>All cards are matched!</span>
            <RegularButton handleClick={handleSubmit}>
                Restart the game!
            </RegularButton>
        </div>
    )
}