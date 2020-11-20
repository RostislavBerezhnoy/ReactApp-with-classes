import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


export const ErrorComponent = (props) => {
    return (
        <div className="message-container">
            <h3 className="m-red-color">{props.errorMessage}</h3>
            <Link to={{pathname: "/"}}><p>Вернуться на главную</p></Link>
        </div>
    );
}

ErrorComponent.propTypes = {
    errorMessage: PropTypes.string
};

ErrorComponent.defaultProps = {
    errorMessage: "К сожалению, данных нет"
};