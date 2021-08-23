import axios from "axios"
import { toast } from "react-toastify"
import { url } from "../../api"

// todo action using redux thunk because this async call

export const getTodos = () => {
    return (dispatch) => {
        axios.get(`${url}/todos`)
            .then(todos => {
                dispatch({
                    type: "GET_TODOS",
                    todos
                })
            })
            .catch((error) => {
                console.log(error.response)
            })
    }
}

export const addTodo = (todo) => {
    return (dispatch, getState) => {
        axios
            .post(`${url}/todos`, todo)
            .then(todo => {
                dispatch({
                    type: "ADD_TODO",
                    todo
                })
            })
            .catch((error) => {
                toast.error(error.response?.data, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            })
    }
}

export const updateTodo = (updatedTodo, id) => {
    return (dispatch) => {
        axios
            .put(`${url}/todos/${id}`, updatedTodo)
            .then(todo => {
                dispatch({
                    type: "UPDATE_TODO",
                    todo
                })
            })
            .catch((error) => {
                toast.error(error.response?.data, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            })
    }
}

export const checkTodo = (id) => {
    return (dispatch) => {
        axios
            .patch(`${url}/todos/${id}`, {})
            .then(todo => {
                dispatch({
                    type: "CHECK_TODO",
                    todo
                })
            })
            .catch((error) => {
                toast.error(error.response?.data, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            })
    }
}

export const deleteTodo = (id) => {
    return (dispatch) => {
        axios
            .delete(`${url}/todos/${id}`)
            .then(() => {
                dispatch({
                    type: "DELETE_TODO",
                    id
                })
            })
            .catch((error) => {
                toast.error(error.response?.data, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            })
    }
}