import axios from "axios";
import {
    GET_USER_LIST_REQUEST,
    GET_USER_LIST_SUCCESS,
    GET_USER_LIST_FAIL
} from "../constants/actionTypes";

import { API_URL } from "../constants/API";


export function getUserListRequest() {
    return dispatch => {
        dispatch({
            type: GET_USER_LIST_REQUEST
        });

        return axios.get(API_URL + "/users")
            .then(response => dispatch(getUserListSuccess(response.data)))
            .catch(error => getUserListFail(error))
    };
}

export function getUserListSuccess(list) {
    return {
        type: GET_USER_LIST_SUCCESS,
        list
    }
}

export function getUserListFail(error) {
    return {
        type: GET_USER_LIST_FAIL,
        error
    }
}
