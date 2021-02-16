import { CHANGE_INPUT, CHANGE_MODAL_COMP, CHANGE_RANGE, CHANGE_SEARCH_NAME, SEARCH, SWITCH_SORT, TOGGLE_ACTIVE_SEARCH, TOGGLE_MODAL, UPDATE_TOTAL_RESULTS, UPDATE_VIDEOS } from "./types"

const initialState = {
    activeSearch: false,
    videos: [],
    inputValue: '',
    totalResults: 0,
    isSearch: false,
    sort: 'grid',
    searchName: '',
    modal: false,
    rangeValue: 25,
    modalComp: false
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ACTIVE_SEARCH:
            return {...state, activeSearch: action.status}

        case CHANGE_INPUT:
            return {...state, inputValue: action.symbol}
        
        case UPDATE_TOTAL_RESULTS:
            return {...state, totalResults: action.results}

        case UPDATE_VIDEOS:
            return {...state, videos: action.videos}

        case SWITCH_SORT:
            return {...state, sort: action.sort}

        case SEARCH:
            return {...state, isSearch: action.isSearch}
        
        case CHANGE_SEARCH_NAME:
            return {...state, searchName: action.name}
        
        case TOGGLE_MODAL:
            return {...state, modal: action.status}

        case CHANGE_RANGE:
            return {...state, rangeValue: action.value}
            
        case CHANGE_MODAL_COMP:
            return {...state, modalComp: action.status}

        default: return state
    }
}