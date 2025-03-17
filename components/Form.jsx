import RegularButton from './RegularButton'
import Select from './Select'

export default function Form({ handleSubmit, handleChange}) {
    return (
        <div className='formContainer'>
            <form className="wrapper">
                    <Select handleChange={handleChange}></Select>
                <RegularButton handleClick={handleSubmit}>
                    Start Game
                </RegularButton>
            </form>
        </div>
    )
}