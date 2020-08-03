const init = {
    status: 0
}

export default (state = init , {type}) => {
    switch(type) {
        case 'LOGIN_SUCCESS':
            return {...state, status: 1}

        case 'LOGOUT_SUCCESS':
            return {...init}

        default :
            return state
    }
}