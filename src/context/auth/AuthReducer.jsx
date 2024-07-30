const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                currentUser: action.payload
            }
        case "LOGOUT":
            return {
                ...state,
                currentUser: null
            }
        case "SIGN_UP":
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default AuthReducer;