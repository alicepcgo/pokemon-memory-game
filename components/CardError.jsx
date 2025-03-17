import { useEffect, useRef } from "react";
import RegularButton from "./RegularButton";

export default function ErrorCard({handleSubmit}) {
    const divRef = useRef()

    useEffect(() => {
        divRef.current.focus()
    }, [])

    return (
        <div className="wrapper wrapper__accent" ref={divRef} tabIndex={-1}>
            <p className="p--large">Sorry, there was an error.</p>
            <p className="p-regular">Please come back later or try again hitting the button below.</p>
            <RegularButton handleClick={handleSubmit}>
                Restart the Game
            </RegularButton>
        </div>
    )
}