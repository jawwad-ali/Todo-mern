import axios from "axios"
import { toast } from "react-toastify"
import { url } from "../../api"

export const signUp = (user) => {
    return (dispatch) => {
        axios
            .post(`${url}/signup`, user)
            .then(token => {
                // setting token to localstorage
                localStorage.setItem("token", token.data)

                dispatch({
                    type: "SIGN_UP",
                    token: token.data
                })
            })
            .catch((error) => {
                console.log(error.response)
                toast.error(error.response?.data, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            })
    }
}

export const signIn = (cred) => {
    return (dispatch) => {
        axios
            .post(`${url}/signin`, cred)
            .then(token => {
                // setting token to localstorage
                localStorage.setItem("token", token.data)

                dispatch({
                    type: "SIGN_IN",
                    token: token.data
                })
            })
            .catch((error) => {
                console.log(error.response)
                toast.error(error.response?.data, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            })
    }
}

export const loadUser = () => {
    return (dispatch, getState) => {
        const token = getState().auth.token
        if (token) {
            dispatch({
                type: "LOAD_USER",
                token
            })
        }
        else return null
    }
}

export const signOut = () => {
    return (dispatch) => {
        dispatch({
            type: "SIGN_OUT"
        })
    }
}