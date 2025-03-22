import {data} from '../data/data';
import Option from './Option';

export default function Select({handleChange}){
    const selectEl = Object.entries(data).map(([key, value])=> (
        <div className='form-select' key={key}>
            <label htmlFor={key}>Select a {key}</label>
            <select name={key} id={key} onChange={handleChange}>
                <Option valueArray={value} />
            </select>
        </div>
    ))

    return selectEl;
}