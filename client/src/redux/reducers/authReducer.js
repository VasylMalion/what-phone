// constants
import {
    ADD_NEW_PHONE,
    CHANGE_USER_AND_TOKEN,
    LOG_OUT, REMOVE_PHONE,
    SET_INITIAL_FAVORITE,
    UPDATE_USER
} from "../constants";

const initialState = {
    isAuth: localStorage.getItem('token') ? true : false,
    user: {},
    arr: []
}

export const authReducer = (state = initialState, action) => {

    switch (action.type){
        case CHANGE_USER_AND_TOKEN:
            return {
                ...state,
                isAuth: true,
                user: action.user
            }

        case LOG_OUT:
            localStorage.removeItem('token')
            return {
                ...state,
                isAuth: false,
                user: {}
            }


        case ADD_NEW_PHONE:

            console.log(state.arr)

            return {
                ...state,
                arr: [
                    ...state.arr,
                    action.payload
                ]
            }

        case REMOVE_PHONE:
            const index = state.arr.findIndex(phone => phone._id == action.payload._id)
            const removeArr = [
                ...state.arr.slice(0, index),
                ...state.arr.slice(index + 1, )
            ]
            return {
                ...state,
                arr: removeArr
            }

        case UPDATE_USER:
            return {
                ...state,
                user: action.payload

            }

        case SET_INITIAL_FAVORITE:
            return {
                ...state,
                arr: action.payload
            }

        default:
            return state
    }
}