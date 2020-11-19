import React, { Component } from "react";
import { Route, Switch  } from "react-router-dom";

// Страницы
import Page404 from "./containers/Page404";
import UserListPage from "./containers/UserListPage";
import UserCardPage from "./containers/UserCardPage";

import { DefaultLayout } from "./containers/DefaultLayout";
import { ErrorComponent } from "./components/ErrorComponent";

const loading = () => <div className="text-center">Загрузка...</div>;


export default class RootRouter extends Component {
  render() {
    return (
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route exact path="/" name="UserList" render={props =>
              <DefaultLayout {...props}>
                <UserListPage {...props}/>
              </DefaultLayout>
          }/>
            <Route exact path="/user" name="Error" render={props =>
                <DefaultLayout {...props}>
                    <ErrorComponent errorMessage="Пользователь не найден"/>
                </DefaultLayout>
            }/>
            <Route exact path="/user/:id" name="UserCard" render={props =>
                <DefaultLayout {...props}>
                    <UserCardPage {...props}/>
                </DefaultLayout>
            }/>
          <Route name="Page404" render={props =>
              <DefaultLayout {...props}>
                  <Page404/>
              </DefaultLayout>}/>
        </Switch>
      </React.Suspense>
    );
  }
}
