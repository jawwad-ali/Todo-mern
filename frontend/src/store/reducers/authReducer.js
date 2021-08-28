import { toast } from "react-toastify"
import jwtDecode from "jwt-decode"

const initialState = {
    token: localStorage.getItem("token"),
    name: null,
    email: null,
    password: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case "LOAD_USER":
        case "SIGN_IN":
        case "SIGN_UP":
            toast("Welcome", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
            const user = jwtDecode(action.token)
            return {
                ...initialState,
                name: user.name,
                email: user.email,
                _id: user._id
            }

        case "SIGN_OUT":
            localStorage.removeItem("token");
            toast("GoodBye", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            return {
                token: null,
                email: null,
                name: null,
                _id: null
            }
        default:
            return state
    }
}
export default authReducer