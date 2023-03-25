import {Route, Switch} from "react-router-dom";
import {Component} from "react";
import dashboardPage from "./pages/dashboard";
import summaryPage from "./pages/summaryPage";
import createPage from "./pages/createPage";
import detailPage from "./pages/detailPage";

class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
        <div>
          <Switch>
            <Route exact path='/' component={dashboardPage}/>
            <Route exact path='/create' component={createPage}/>
            <Route exact path='/detail' component={detailPage}/>
            <Route exact path='/summary' component={summaryPage}/>
            {/*<Route exact path='/maps' component={Maps}/>*/}
          </Switch>
        </div>
    )
  };
}

export default App;