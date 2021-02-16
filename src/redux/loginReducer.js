import { AUTH, CHECK_AUTH, LOGOUT, OFF_PASS, ON_PASS, TOGGLE_ACTIVE_LOGIN, TOGGLE_ACTIVE_PASS } from "./types"
import db from '../acc.json'
import { sign, verify } from "jsonwebtoken"
import secret from '../config.json'

const initialState = {
    hiddenPass: true,
    activeLogin: false,
    activePass: false,
    token: '',
    auth: false
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_PASS:
            return {...state, hiddenPass: false}
        case OFF_PASS:
            return {...state, hiddenPass: true}
        case TOGGLE_ACTIVE_LOGIN:
            return {...state, activeLogin: action.status}
        case TOGGLE_ACTIVE_PASS:
            return {...state, activePass: action.status}
        case AUTH:
            if ((db.filter(user => user.pass === action.data.pass && user.login === action.data.login)).length > 0) {
                const token = sign(action.data, secret.secret)
                localStorage.setItem('token', token)
                return {...state, token: token, auth: true}
            }
            return state
        case CHECK_AUTH:
            if (action.token) {
                const decodedToken = verify(action.token, secret.secret)
                if ((db.filter(user => user.pass === decodedToken.pass && user.login === decodedToken.login)).length > 0) {
                    return {...state, auth: true}
                }
            }
            return state
        
        case LOGOUT:
            localStorage.removeItem('token')
            return {...state, auth: !action.status}

        default: return state
    }
}