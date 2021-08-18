import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { routes } from "./routes";

export default function RootRouter() {
  return (
    <Router>
      <Switch>
        {routes.map(r => (
          <Route component={r.component} key={r.name} path={r.path} />
        ))}
        <Redirect exact from="/" to="/home" />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}
