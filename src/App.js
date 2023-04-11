import {Route, Switch} from "react-router-dom";
import {Component} from "react";
import dashboardPage from "./pages/dashboard";
import historyPage from "./pages/historyPage";
import createPage from "./pages/createPage";
import detailPage from "./pages/detailPage";
import cameraPage from "./pages/cameraPage";
import loginPage from "./pages/loginPage";

class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
        <div>
          <Switch>
            <Route exact path='/' component={dashboardPage}/>
            <Route exact path='/create' component={createPage}/>
            <Route exact path='/camera' component={cameraPage}/>
            <Route exact path='/detail' component={detailPage}/>
            <Route exact path='/history' component={historyPage}/>
            <Route exact path='/login' component={loginPage}/>
            {/*<Route exact path='/maps' component={Maps}/>*/}
          </Switch>
        </div>
    )
  };
}

export default App;