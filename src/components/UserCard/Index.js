import React, { Component } from "react";
import PropTypes from "prop-types";

import UserCard from "./UserCard";
import Todos from "./Todos";
import { ErrorComponent } from "../ErrorComponent";

import "./index.css";

export default class Index extends Component {

    componentDidMount() {
        const { userId, onGetUserPayload } = this.props;
        onGetUserPayload(userId);
    }

    render() {
        const { payload, error } = this.props.userPayload;
        if (!error){
            if (payload.length !== 0){
                return (
                    <div className="row">
                        <div className="col-lg-6 display-center">
                            <UserCard {...this.props}/>
                        </div>
                        <div className="col-lg-6 display-center">
                            <Todos {...this.props}/>
                        </div>
                    </div>
                );
            } else {
                return (<ErrorComponent errorMessage="Пользователь не найден"/>)
            }
        } else {
            return (<ErrorComponent errorMessage="Пользователь не найден"/>)
        }
    }
}

Index.propTypes = {
    userId: PropTypes.string.isRequired,
    onGetUserPayload: PropTypes.func.isRequired,
    userPayload: PropTypes.shape({
        payload: PropTypes.array.isRequired,
        error: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ])
    }).isRequired,
};