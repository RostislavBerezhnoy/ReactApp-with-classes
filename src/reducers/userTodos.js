import {
    GET_USER_TODOS_REQUEST,
    GET_USER_TODOS_SUCCESS,
    GET_USER_TODOS_FAIL
} from "../constants/actionTypes";

let initialState = {
    list: [],
    loading: false,
    error: null
};

export default function userTodos(state = initialState, action) {
    switch(action.type) {
        case GET_USER_TODOS_REQUEST:
            return {...state, loading: true};
        case GET_USER_TODOS_SUCCESS:
            return {...state, list: action.list, loading: false, error: null};
        case GET_USER_TODOS_FAIL:
            return {...state, error: action.error, loading: false};
        default:
            return state;
    }
}
