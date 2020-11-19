import { combineReducers } from "redux";

import userList, * as fromUserList from "./userList";
import userPayload from "./userPayload";
import userTodos from "./userTodos";

//импорт селектора
import userSelector from "./selectors/userSelector";

const rootReducer = combineReducers({
    userList,
    userSelector,
    userPayload,
    userTodos
});

export default rootReducer;

//селектор для фильтрации юзеров по компании
export function getFilteredUserList(state) {
    return fromUserList.getFilteredUserList(state.userList, state.userSelector);
}