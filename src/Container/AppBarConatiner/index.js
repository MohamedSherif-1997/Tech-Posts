import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Feed from "../../Components/feed";
import Jobs from "../../Components/jobs";
import history from "../../history";
import AppBarComponent from "./AppBarComponent";

export default function AppBarContainer() {
  return (
    <div>
      <AppBarComponent history={history} />
      <Switch>
        <Route path="/tech-posts/feed" exact component={Feed} />
        <Route path="/tech-posts/jobs" exact component={Jobs} />
        <Redirect to="/tech-posts/feed" exact />
      </Switch>
    </div>
  );
}
