import { USER_SELECTOR, USER_SELECTOR_SHOW_ALL } from "../../constants/selectors";

let initialState = {
    type: USER_SELECTOR,
    filterType: USER_SELECTOR_SHOW_ALL,
    company: null
};

export default function userSelector(state = initialState, action) {
    switch (action.type) {
        case USER_SELECTOR:
            return action;
        default:
            return state;
    }
}
