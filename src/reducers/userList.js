import {
    GET_USER_LIST_REQUEST,
    GET_USER_LIST_SUCCESS,
    GET_USER_LIST_FAIL
} from "../constants/actionTypes";

import {
    USER_SELECTOR_SHOW_FILTERED_BY_COMPANY,
    USER_SELECTOR_SHOW_ALL
} from "../constants/selectors";

let initialState = {
    list: [],
    loading: false,
    error: null
};

export default function userList(state = initialState, action) {
    switch(action.type) {
        case GET_USER_LIST_REQUEST:
            return {...state, loading: true};
        case GET_USER_LIST_SUCCESS:
            return {...state, list: action.list, loading: false, error: null};
        case GET_USER_LIST_FAIL:
            return {...state, error: action.error, loading: false};
        default:
            return state;
    }
}

export function getFilteredUserList(state, action) {
    switch (action.filterType) {
        case USER_SELECTOR_SHOW_ALL:
            return state;
        case USER_SELECTOR_SHOW_FILTERED_BY_COMPANY:
            return {...state, list: state.list.filter(c => c.company.name === action.company)}
        default:
            return state;
    }
}
