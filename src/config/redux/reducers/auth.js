const init = {
    status: 0
}

export default (state = init , {type, payload}) => {
    switch(type) {
        case 'LOGIN_SUCCESS':
            return {...state, status: payload}

        case 'LOGOUT_SUCCESS':
            return {...init}

        default :
            return state
    }
}