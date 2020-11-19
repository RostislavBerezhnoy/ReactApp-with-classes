import React from "react";
import PropTypes from "prop-types";

export const ErrorComponent = (props) => {
    return (
        <div className="message-container">
            <h3 className="m-red-color">{props.errorMessage}</h3>
        </div>
    );
}

ErrorComponent.propTypes = {
    errorMessage: PropTypes.string
};

ErrorComponent.defaultProps = {
    errorMessage: "К сожалению, данных нет",
};