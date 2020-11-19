import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";

import {
    USER_SELECTOR_SHOW_FILTERED_BY_COMPANY,
    USER_SELECTOR_SHOW_ALL
} from "../../constants/selectors";


export default class SelectCompany extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: null
        };
        this.updateCompanyValue = this.updateCompanyValue.bind(this);
        this.checkCompany = this.checkCompany.bind(this);
        this.showAllUsers = this.showAllUsers.bind(this);
        this.showFilteredByCompanyUsers = this.showFilteredByCompanyUsers.bind(this);
    }

    updateCompanyValue(company){
        this.setState({company});
        this.checkCompany(company);
    }

    checkCompany(company){
        if (company){
            this.showFilteredByCompanyUsers(company.company.name);
        } else {
            this.showAllUsers();
        }
    }

    showAllUsers(){
        const { onFilterUserList } = this.props;
        onFilterUserList(null,  USER_SELECTOR_SHOW_ALL);
    }

    showFilteredByCompanyUsers(company){
        const { onFilterUserList } = this.props;
        onFilterUserList(company,  USER_SELECTOR_SHOW_FILTERED_BY_COMPANY);
    }

    render() {
        const { list, loading } = this.props.userList;
        return (
            <div>
                <Select
                    value={list.filter(row => {
                        return row.company.name === this.state.company
                    })[0]}
                    placeholder="Поиск по компании"
                    noOptionsMessage={() => "Данных нет"}
                    isLoading={loading}
                    isClearable={true}
                    isSearchable={list.length !== 0}
                    onChange={value => this.updateCompanyValue(value)}
                    options={list.filter((value, index, self) => self.findIndex((t) => (
                        t.company.name === value.company.name
                    )) === index)}
                    getOptionLabel={option => option.company.name}
                    getOptionValue={option => option.company.name}
                />
            </div>
        );
    }
}

SelectCompany.propTypes = {
    onFilterUserList: PropTypes.func.isRequired,
    userList: PropTypes.shape({
        list: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                username: PropTypes.string,
                email: PropTypes.string,
                address: PropTypes.shape({
                    street: PropTypes.string,
                    suite: PropTypes.string,
                    city: PropTypes.string,
                }).isRequired,
            }).isRequired,
        ).isRequired,
        loading: PropTypes.bool.isRequired,
        error: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ])
    }).isRequired
};