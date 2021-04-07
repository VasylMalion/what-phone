// constants
import {
    CHANGE_USER_AND_TOKEN,
    LOG_OUT,
    ADD_INITIAL_PHONES,
    ADD_NEW_PHONE,
    ALL_FAVORITE_PHONES,
    UPDATE_USER,
    SET_INITIAL_FAVORITE,
    REMOVE_PHONE
} from "../constants";

export const changeUserAndToken = data => {
    return {
        type: CHANGE_USER_AND_TOKEN,
        user: data
    }
}

export const logOut = data => {
    return {
        type: LOG_OUT,
        user: data
    }
}

export const addInitialPhones = payload => {
    return {
        type: ADD_INITIAL_PHONES,
        payload
    }
}

export const addNewPhone = payload => {
    return {
        type: ADD_NEW_PHONE,
        payload
    }
}

export const removePhone = payload => {
    return {
        type: REMOVE_PHONE,
        payload
    }
}

export const allFavoritePhones = payload => {
    return {
        type: ALL_FAVORITE_PHONES,
        payload
    }
}

export const updateUser = payload => {
    return {
        type: UPDATE_USER,
        payload
    }
}

export const setInitialFavorite = payload => {
    return {
        type: SET_INITIAL_FAVORITE,
        payload
    }
}