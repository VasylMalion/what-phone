// constants
import {
    FETCHED_ALL_PHONES,
    REQUESTED_ALL_PHONES,
    REQUESTED_ALL_PHONES_SUCCEEDED,
    REQUESTED_ALL_PHONES_FAILED,
    FETCHED_ONE_PHONE,
    REQUESTED_ONE_PHONE,
    REQUESTED_ONE_PHONE_SUCCEEDED,
    REQUESTED_ONE_PHONE_FAILED,
    GET_MORE_PHONES, WITH_FILTERS
} from "../constants";

// Для всіх телефонів
export const fetchAllPhones = payload => {
    return { type: FETCHED_ALL_PHONES, payload }
};

export const requestAllPhones = () => {
    return { type: REQUESTED_ALL_PHONES }
};

export const requestAllPhonesSuccess = (data) => {
    return { type: REQUESTED_ALL_PHONES_SUCCEEDED, data }
};

export const requestAllPhonesError = () => {
    return { type: REQUESTED_ALL_PHONES_FAILED }
};

// Для одного телефона
export const fetchOnePhoneAction = payload => {
    return {type: FETCHED_ONE_PHONE, payload}
}

export const requestOnePhone = () => {
    return { type: REQUESTED_ONE_PHONE }
};

export const requestOnePhoneSuccess = (data) => {
    return { type: REQUESTED_ONE_PHONE_SUCCEEDED, data }
};

export const requestOnePhoneError = () => {
    return { type: REQUESTED_ONE_PHONE_FAILED }
};

//
export const getMorePhones = () => {
    return { type: GET_MORE_PHONES}
}

//
export const getWithFilters = payload => {
    return { type: WITH_FILTERS, payload}
}
