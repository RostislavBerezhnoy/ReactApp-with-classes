import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MaterialTable from "material-table";

import { PAGE_SIZE } from "../../constants/pageSize";
import { declension } from "../../constants/functions/declension";


export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           rows: PAGE_SIZE
        };
    }

    componentDidMount() {
        const { onGetUserList } = this.props;
        onGetUserList();
    }

    render() {
        const { loading } = this.props.userList;
        const { list } = this.props.filteredUserList;
        const { rows } = this.state;
        return (
            <div className="max-width_100percent">
                <MaterialTable
                    title="Список пользователей"
                    data={list}
                    isLoading={loading}
                    onChangeRowsPerPage={ rows => this.setState({rows})}
                    columns={[
                        { title: "Аватар", field: "", width: "50", render:
                                rowData =>
                                    <Link to={{pathname: `/user/${rowData.id}`}}>
                                        <img src="https://via.placeholder.com/120x180" className="rounded-avatar" alt={rowData.name}/>
                                    </Link>

                        },
                        { title: "ФИО", field: "name", defaultSort: "asc", render: rowData => <Link to={{pathname: `/user/${rowData.id}`}}>{rowData.name}</Link>},
                        { title: "Имя пользователя", field: "username" },
                        { title: "E-mail", field: "email", },
                        { title: "Адрес", field: "address", render:
                                rowData => <div>{rowData.address.city}, {rowData.address.street}, {rowData.address.suite}</div>
                        }
                    ]}
                    localization={{
                        body: {
                            emptyDataSourceMessage: "Нет данных для отображения"
                        },
                        pagination: {
                            labelRowsSelect: declension(["строка", "строки", "строк"], rows, true),
                            labelDisplayedRows: "{from}-{to} из {count}",
                            firstTooltip: "Первая страница",
                            lastTooltip: "Последняя страница",
                            previousTooltip: "Предыдущая страница",
                            nextTooltip: "Следующая страница"
                        }
                    }}
                    options={{
                        search: false,
                        pageSize: PAGE_SIZE,
                        pageSizeOptions: [3, 5, 10, 20],
                        headerStyle: {fontWeight: "bold", zIndex: "unset"}
                    }}
                />
            </div>
        );
    }
}

UserList.propTypes = {
    onGetUserList: PropTypes.func.isRequired,
    filteredUserList: PropTypes.shape({
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
    }).isRequired,
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

