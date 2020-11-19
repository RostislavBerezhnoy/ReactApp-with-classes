import axios from "axios";
import {
    GET_USER_TODOS_REQUEST,
    GET_USER_TODOS_SUCCESS,
    GET_USER_TODOS_FAIL
} from "../constants/actionTypes";

import { API_URL } from "../constants/API";


export function getUserTodosRequest(id) {
    return dispatch => {
        dispatch({
            type: GET_USER_TODOS_REQUEST
        });

        return axios.get(API_URL + "/todos", {params: {userId: id}})
            .then(response => dispatch(getUserTodosSuccess(response.data)))
            .catch(error => getUserTodosFail(error))
    };
}

export function getUserTodosSuccess(list) {
    return {
        type: GET_USER_TODOS_SUCCESS,
        list
    }
}

export function getUserTodosFail(error) {
    return {
        type: GET_USER_TODOS_FAIL,
        error
    }
}
