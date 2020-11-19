import React from "react";

import UserCard from "./UserCard";
import Todos from "./Todos";
import "./index.css";

export default function Index (props) {
    return (
        <div className="row">
            <div className="col-lg-6 display-center">
                <UserCard {...props}/>
            </div>
            <div className="col-lg-6 display-center">
                <Todos {...props}/>
            </div>
        </div>
    );
}