import RegularButton from './RegularButton'
import Select from './Select'

export default function Form({ handleSubmit, handleChange}) {
    return (
        <div>
            <form>
                <div>
                    <Select handleChange={handleChange}></Select>
                </div>
                <RegularButton handleClick={handleSubmit}>
                    Start Game
                </RegularButton>
            </form>
        </div>
    )
}