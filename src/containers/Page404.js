import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
    return (
        <div className="display-flex justify-content-center">
            <h1 className="float-left display-3 mr-4">404</h1>
            <div>
                <p className="pt-3 margin-bottom-unset">Запрашиваемая страница не надена!</p>
                <Link to={{pathname: "/"}}><h4 className="float-left">Вернуться на главную</h4></Link>
            </div>
        </div>
    );
}
