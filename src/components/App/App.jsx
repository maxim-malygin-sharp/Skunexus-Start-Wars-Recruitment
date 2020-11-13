import React from 'react';
import { Route, Switch } from "react-router-dom";

import "./App.css";
import { routes } from "../../utils/routes";

function App() {
  return (
    <Switch>
      {routes.map((route, index) => {
        const Component = route.Component;
        const props = route.props;
        return (
          <Route key={route + index} path={route.path} exact={route.exact}>
            <Component {...props} />
          </Route>
        );
      })}
    </Switch>
  );
}

export default App;
