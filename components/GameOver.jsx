import { useEffect, useRef } from "react";
import RegularButton from "./RegularButton";

export default function GameOver({handleSubmit}){

    const divRef = useRef(null)

    useEffect(() => {
        divRef.current.focus()
    }, [])
    return (
        <div className="wrapper wrapper--accent" ref={divRef} tabIndex={-1}>
            <p className='p--large'>All cards are matched!</p>
            <RegularButton handleClick={handleSubmit}>
                Restart the game!
            </RegularButton>
        </div>
    )
}