import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import { RestaurantDetailPage, Home, UpdatePage } from "./routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/restaurants/:id/update" component={UpdatePage} />
          <Route
            exact
            path="/restaurants/:id"
            component={RestaurantDetailPage}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
