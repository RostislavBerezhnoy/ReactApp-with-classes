import React from "react";
import UserList from "../components/UserList/Index";

import { connect } from "react-redux";
import { getUserListRequest } from "../actions/getUserListRequest";
import { userSelector } from "../actions/selectors/userSelector";
import { getFilteredUserList } from "../reducers/_rootReducer";

function UserListPage(props) {
    return (<UserList {...props}/>)
}

function mapStateToProps(state) {
    return {
        userList: state.userList,
        userSelector: state.userSelector,
        filteredUserList: getFilteredUserList(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetUserList: () => dispatch(getUserListRequest()),
        onFilterUserList: (company, filterType) => dispatch(userSelector(company, filterType)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListPage);
