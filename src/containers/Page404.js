import React from "react";

export default function Page404() {
    return (
        <div className="display-flex justify-content-center">
            <h1 className="float-left display-3 mr-4">404</h1>
            <div>
                <h4 className="pt-3">Упс!</h4>
                <p className="text-muted float-left">Запрашиваемая страница не надена.</p>
            </div>
        </div>
    );
}
