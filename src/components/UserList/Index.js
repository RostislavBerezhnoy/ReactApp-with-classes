import React from "react";

import SelectCompany from "./SelectCompany";
import UserList from "./UserList";
import "./index.css";

export default function Index(props) {
    return (
        <div>
            <div className="margin-bottom-15px">
                <div className="col-md-4 padding-unset">
                    <SelectCompany {...props}/>
                </div>
            </div>
            <div>
                <UserList {...props}/>
            </div>
        </div>
    );
}