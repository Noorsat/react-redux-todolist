import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { saveTask } from '../features/todoSlice';
import './Input.css'

const Input = () => {
    const [input, setInput] = useState("");
    
    const dispatch = useDispatch();

    const inputChangeHandler = (e) => {
        setInput(e.target.value);
    }

    const addItemHandler = ( ) => {
        dispatch(saveTask({
            item:input,
            done:false,
            id:Date.now()                
        }))
    }
    return (
        <div className="input">
            <input type="text" value={input} onChange={(e) => inputChangeHandler(e)}/>
            <button onClick={addItemHandler}>Add</button>
        </div>
    )
}

export default Input
