import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks:[]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        setCheck : (state,action) => {
            state.tasks.map(item => {
                if (item.id === action.payload){
                    item.done = !item.done;
                }
            })
        },
        deleteTask: (state,action) => {
            state.tasks.map(item => {
                if (item.id == action.payload){
                    state.tasks.pop(item);
                }
            })
        }
    }
});

export const { saveTask, setCheck, deleteTask } = todoSlice.actions

export const selectTodoList = state => state.todos.tasks         

export default todoSlice.reducer