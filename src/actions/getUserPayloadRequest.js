import axios from "axios";
import {
    GET_USER_PAYLOAD_REQUEST,
    GET_USER_PAYLOAD_SUCCESS,
    GET_USER_PAYLOAD_FAIL
} from "../constants/actionTypes";

import { API_URL } from "../constants/API";


export function getUserPayloadRequest(id) {
    return dispatch => {
        dispatch({
            type: GET_USER_PAYLOAD_REQUEST
        });

        return axios.get(API_URL + "/users", {params: {id}})
            .then(response => dispatch(getUserPayloadSuccess(response.data)))
            .catch(error => getUserPayloadFail(error))
    };
}

export function getUserPayloadSuccess(payload) {
    return {
        type: GET_USER_PAYLOAD_SUCCESS,
        payload
    }
}

export function getUserPayloadFail(error) {
    return {
        type: GET_USER_PAYLOAD_FAIL,
        error
    }
}
