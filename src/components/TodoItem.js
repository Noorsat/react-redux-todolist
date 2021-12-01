import React from 'react'   
import './TodoItem.css'
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';
import { setCheck, deleteTask } from '../features/todoSlice';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({name,done,id}) => {
    const dispatch = useDispatch();

    const checkboxHandler = () => {
        dispatch(setCheck(id))
    }

    const deleteHandler = () => {
        dispatch(deleteTask(id));   
    }
    return (
        <div className="todoItem">
            <Checkbox checked={done} onChange={checkboxHandler}/>
            <p className={done && 'todoItem--done'}>{name}</p>
            <DeleteIcon onClick={deleteHandler}/>
        </div>
    )
}

export default TodoItem
