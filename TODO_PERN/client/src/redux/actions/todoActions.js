import * as types from '../actionTypes/todoTypes';
import * as API from '../../api/api';

export const getTodo = (id) => async (dispatch) => {
    try {
        const fetchedTodo = await API.getTodo(id);
        dispatch({ type: types.GET, payload: fetchedTodo.data });
    } catch (error) {
        console.log(error);
    }
}

export const getAllTodos = () => async (dispatch) => {
    try {
        const fetchedTodos = await API.getAllTodos();
        console.log(fetchedTodos)
        dispatch({ type: types.GET_ALL, payload: fetchedTodos.data });
    } catch (error) {
        console.log(error);
    }
}

export const createTodo = (todoData) => async (dispatch) => {
    try {
        const createdTodo = await API.createTodo(todoData);
        dispatch({ type: types.CREATE, payload: createdTodo.data });
    } catch (error) {
        console.log(error);
    }
}

export const updateTodo = (id, todoData) => async (dispatch) => {
    try {
        const updatedTodo = await API.updateTodo(id, todoData);
        dispatch({ type: types.UPDATE, payload: updatedTodo.data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        const deletedTodo = await API.deleteTodo(id);
        dispatch({ type: types.DELETE, payload: deletedTodo.data });
    } catch (error) {
        console.log(error);
    }
}