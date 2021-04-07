// constants
import {
    REQUESTED_ALL_PHONES_SUCCEEDED,
    REQUESTED_ONE_PHONE_SUCCEEDED,
    GET_MORE_PHONES,
    WITH_FILTERS
} from "../constants";

const initialState = {
    allPhones: [],
    fetching: true,
    totalCount: 2,
    onePhone: [],
    foundedPhones: []
}

export const phonesReducer = (state = initialState, action) => {

    switch (action.type){

        case REQUESTED_ALL_PHONES_SUCCEEDED:
            const newAllFhone = [
                ...state.allPhones,
                ...action.data.phones
            ]
            return {
                ...state,
                allPhones: newAllFhone,
                totalCount: action.data.totalCount,
                fetching: false
            }

        case REQUESTED_ONE_PHONE_SUCCEEDED:
            return {
                ...state,
                onePhone: action.data
            }

        case GET_MORE_PHONES:
            return {
                ...state,
                fetching: true
            }

        case WITH_FILTERS:
            return {
                ...state,
                foundedPhones: [
                    ...action.payload
                ]
            }

        default:
            return state
    }
}