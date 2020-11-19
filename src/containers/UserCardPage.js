import React from "react";
import UserCard from "../components/UserCard/Index";

import { connect } from "react-redux";
import { getUserPayloadRequest } from "../actions/getUserPayloadRequest";
import { getUserTodosRequest } from "../actions/getUserTodosRequest";


function UserCardPage(props) {
    let userId = props.match.params.id;
    return (<UserCard userId={userId} {...props}/>)
}

function mapStateToProps(state) {
    return {
        userPayload: state.userPayload,
        userTodos: state.userTodos,
        userTodosList: state.userTodos.list.sort((a, b) => a.completed > b.completed ? 1 : -1)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onGetUserPayload: id => dispatch(getUserPayloadRequest(id)),
        onGetUserTodos: id => dispatch(getUserTodosRequest(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCardPage);
