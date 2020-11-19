import {
    GET_USER_PAYLOAD_REQUEST,
    GET_USER_PAYLOAD_SUCCESS,
    GET_USER_PAYLOAD_FAIL
} from "../constants/actionTypes";

let initialState = {
    payload: [
        {
            "id": null,
            "name": "",
            "username": "",
            "email": "",
            "address": {
                "street": "",
                "suite": "",
                "city": "",
                "zipcode": "",
                "geo": {
                    "lat": "",
                    "lng": ""
                }
            },
            "phone": "",
            "website": "",
            "company": {
                "name": "",
                "catchPhrase": "",
                "bs": ""
            }
        },
    ],
    loading: false,
    error: null
};

export default function userPayload(state = initialState, action) {
    switch(action.type) {
        case GET_USER_PAYLOAD_REQUEST:
            return {...state, loading: true};
        case GET_USER_PAYLOAD_SUCCESS:
            return {...state, payload: action.payload, loading: false, error: null};
        case GET_USER_PAYLOAD_FAIL:
            return {...state, error: action.error, loading: false};
        default:
            return state;
    }
}
