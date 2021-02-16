import { OFF_PASS, ON_PASS, TOGGLE_ACTIVE_PASS, TOGGLE_ACTIVE_LOGIN, AUTH, CHECK_AUTH, TOGGLE_ACTIVE_SEARCH, CHANGE_INPUT, UPDATE_TOTAL_RESULTS, UPDATE_VIDEOS, SWITCH_SORT, SEARCH, CHANGE_SEARCH_NAME, TOGGLE_MODAL, CHANGE_RANGE, ADD_FAV, UPDATE_FILE, CHANGE_FAV, CHANGE_NAME, CHANGE_MODAL_COMP, DELETE_FAV, LOGOUT } from "./types"

export const onPass = () => {
    return {
        type: ON_PASS
    }
}

export const offPass = () => {
    return {
        type: OFF_PASS
    }
}

export const toggleActivePass = (status) => {
    return {
        type: TOGGLE_ACTIVE_PASS,
        status
    }
}

export const toggleActiveLogin = (status) => {
    return {
        type: TOGGLE_ACTIVE_LOGIN,
        status
    }
}

export const auth = (data) => {
    return {
        type: AUTH,
        data
    }
}

export const checkAuth = (token) => {
    return {
        type: CHECK_AUTH,
        token
    }
}

export const toggleActiveSearch = (status) => {
    return {
        type: TOGGLE_ACTIVE_SEARCH,
        status
    }
}

export const changeInput = (symbol) => {
    return {
        type: CHANGE_INPUT,
        symbol
    }
}

export const updateTotalResults = (results) => {
    return {
        type: UPDATE_TOTAL_RESULTS,
        results
    }
}

export const updateVideos = (videos) => {
    return {
        type: UPDATE_VIDEOS,
        videos
    }
}

export const switchSort = (sort) => {
    return {
        type: SWITCH_SORT,
        sort
    }
}

export const search = (isSearch) => {
    return {
        type: SEARCH,
        isSearch
    }
}

export const changeSearchName = (name) => {
    return {
        type: CHANGE_SEARCH_NAME,
        name
    }
}

export const toggleModal = (status) => {
    return {
        type: TOGGLE_MODAL,
        status
    }
}

export const changeRange = (value) => {
    return {
        type: CHANGE_RANGE,
        value
    }
}

export const addFav = (fav) => {
    return {
        type: ADD_FAV,
        fav
    }
}

export const updateFile = () => {
    return {
        type: UPDATE_FILE
    }
}

export const changeFav = (info) => {
    return {
        type: CHANGE_FAV,
        info
    }
}

export const changeName = (symbol, index) => {
    return {
        type: CHANGE_NAME,
        symbol,
        index
    }
}

export const changeModalComp = (status) => {
    return {
        type: CHANGE_MODAL_COMP,
        status
    }
} 

export const deleteFav = (index) => {
    return {
        type: DELETE_FAV,
        index
    }
}

export const logout = (status) => {
    return {
        type: LOGOUT,
        status
    }
}