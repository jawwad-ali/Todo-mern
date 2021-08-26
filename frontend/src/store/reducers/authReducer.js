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

        default:
            return state
    }
}
export default authReducer