import "./App.css";

import { Route, Switch } from "react-router-dom";

import { routes } from "../../utils/routes";

function App() {
  return (
    <Switch>
      {routes.map((route) => {
        const Component = route.Component;
        const props = route.props;
        return (
          <Route path={route.path} exact={route.exact}>
            <Component {...props} />
          </Route>
        );
      })}
    </Switch>
  );
}

export default App;
