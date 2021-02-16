import db from '../acc.json'
import { ADD_FAV, CHANGE_FAV, CHANGE_NAME, DELETE_FAV, UPDATE_FILE } from './types'

const inititalState = {
    favs: [
        {req: 'rew', name: 'jak'}
    ],
}

export const favoritesReducer = (state = inititalState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {...state, favs: [...state.favs, action.fav]}

        case UPDATE_FILE:
            return state

        case CHANGE_FAV:
            return {...state, favs: state.favs[action.info.index].name = action.info.name}

        case CHANGE_NAME:
            return {...state, favs: [...state.favs, state.favs[action.index].name = action.symbol]}
        
        case DELETE_FAV:
            return {...state, favs: state.favs.filter((i, index) => index != action.index)}

        default: return state
    }
}