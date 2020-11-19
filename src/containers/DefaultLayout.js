import React from "react";

export function DefaultLayout(props){
    return (
        <div className="container margin-top-60px margin-bottom-50px">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    {props.children}
                </div>
            </div>
        </div>
    )
}