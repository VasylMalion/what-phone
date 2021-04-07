// core
import axios from "axios";
import { call, put, takeEvery} from 'redux-saga/effects'

// actions
import {
    requestAllPhonesError,
    requestAllPhonesSuccess,
    requestAllPhones,
    requestOnePhone,
    requestOnePhoneSuccess,
    requestOnePhoneError
} from "../actions/phonesActions";

// all phones
export function* getAllPhones() {
    yield takeEvery('FETCHED_ALL_PHONES', fetchAllPhones);
}

function* fetchAllPhones(payload) {
    try {
        yield put(requestAllPhones());
        const data = yield call(() => {
                return axios.get(
                    `http://localhost:3052/api/find-phone?limit=15&page=${payload.payload}`)
                    .then(response => {
                        return {
                            phones: response.data.allPhones,
                            totalCount: response.data.allPhonesCount
                        }
                    })
            }
        );
        yield put(requestAllPhonesSuccess(data));
    } catch (error) {
        yield put(requestAllPhonesError());
    }
}

// one phone
export function* getOnePhone() {
    yield takeEvery('FETCHED_ONE_PHONE', fetchOnePhoneSaga2);
}

function* fetchOnePhoneSaga2(payload) {
    try {
        yield put(requestOnePhone());
        const data = yield call(() => {
                return axios.get(
                    `http://localhost:3051/api/find-phone/${payload}`)
                    .then(response => response.data)
            }
        );
        yield put(requestOnePhoneSuccess(data));
    } catch (error) {
        yield put(requestOnePhoneError());
    }
}
