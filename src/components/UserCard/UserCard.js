import React, { Component } from "react";
import PropTypes from "prop-types";
import { ErrorComponent } from "../ErrorComponent";
import { SpinnerComponent } from "../SpinnerComponent";


export default class UserCard extends Component {
    constructor(props) {
        super(props);
        this.renderUserCard = this.renderUserCard.bind(this);
    }

    componentDidMount() {
        const { userId, onGetUserPayload } = this.props;
        onGetUserPayload(userId);
    }

    renderUserCard(){
        const { payload } = this.props.userPayload;
        return (
            <div className="user-box user-card text-center margin-top-50px">
                <div className="user">
                    <img src="https://via.placeholder.com/120x180" alt={payload[0].name}/>
                </div>
                <h3>{payload[0].username}</h3>
                <span className="position">{payload[0].name}</span>
                <div className="text-left font-size-17px">
                    <div className="padding-bottom-10px">
                        <div className="key-item">Email:</div>
                        <a href={`mailto:${payload[0].email}`} className="m-red-color" >{payload[0].email}</a>
                    </div>
                    <div className="padding-bottom-10px">
                        <div className="key-item">Адрес:</div>
                        {payload[0].address.zipcode}, {payload[0].address.city}, {payload[0].address.street}, {payload[0].address.suite}
                    </div>
                    <div className="padding-bottom-10px">
                        <div className="key-item">Геопозиция:</div>{payload[0].address.geo.lat}, {payload[0].address.geo.lng}
                    </div>
                    <div className="padding-bottom-10px">
                        <div className="key-item">Телефон:</div>
                        <a href={`tel:${payload[0].phone}`} className="m-red-color" >{payload[0].phone}</a>
                    </div>
                    <div className="padding-bottom-10px">
                        <div className="key-item">Сайт:</div>
                        <a href={`https://${payload[0].website}`} className="m-red-color" target="_blank" rel="noopener noreferrer">{payload[0].website}</a>
                    </div>
                    <div className="padding-bottom-10px">
                        <div className="key-item">Компания:</div>{payload[0].company.name}
                    </div>
                    <div className="padding-bottom-10px">
                        <div className="key-item">catchPhrase:</div>{payload[0].company.catchPhrase}
                    </div>
                    <div className="padding-bottom-10px">
                        <div className="key-item">bs:</div>{payload[0].company.bs}
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const { payload, loading, error } = this.props.userPayload;
        if(!loading){
            if (!error){
                if (payload.length !== 0){
                    return this.renderUserCard();
                } else {
                    return (<ErrorComponent errorMessage="К сожалению, данных нет"/>)
                }
            } else {
                return (<ErrorComponent errorMessage="Пользователь не найден"/>)
            }
        } else {
            return (<SpinnerComponent/>)
        }
    }
}


UserCard.propTypes = {
    userId: PropTypes.string.isRequired,
    onGetUserPayload: PropTypes.func.isRequired,
    userPayload: PropTypes.shape({
        payload: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                username: PropTypes.string,
                email: PropTypes.string,
                address: PropTypes.shape({
                    street: PropTypes.string,
                    suite: PropTypes.string,
                    city: PropTypes.string,
                    zipcode: PropTypes.string,
                    geo: PropTypes.shape({
                        lat: PropTypes.string,
                        lng: PropTypes.string,
                    })
                }).isRequired,
                phone: PropTypes.string,
                website: PropTypes.string,
                company: PropTypes.shape({
                    name: PropTypes.string,
                    catchPhrase: PropTypes.string,
                    bs: PropTypes.string,
                })
            }).isRequired,
        ).isRequired,
        loading: PropTypes.bool.isRequired,
        error: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ])
    }).isRequired
};