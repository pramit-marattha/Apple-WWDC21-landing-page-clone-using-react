import "./styles/App.css";

// Pages
import Overview from "./pages/Overview";
import SwiftStudent from "./pages/SwiftStudent";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Overview} exact />
        <Route path="/swift-student-challenge" component={SwiftStudent} />
      </Switch>
    </>
  );
}

export default App;
