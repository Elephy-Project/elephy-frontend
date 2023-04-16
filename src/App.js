import {Route, Switch} from "react-router-dom";
import {Component} from "react";
import dashboardPage from "./pages/dashboard";
import historyPage from "./pages/historyPage";
import createPage from "./pages/createPage";
import detailPage from "./pages/detailPage";
import cameraPage from "./pages/cameraPage";
import loginPage from "./pages/loginPage";
import landingPage from "./pages/landingPage";
import historyMobilePage from "./pages/historyMobilePage";

class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
          <div>
            <Switch>
              <Route exact path='/' component={landingPage}/>
              <Route exact path='/dashboard' component={dashboardPage}/>
              <Route exact path='/create' component={createPage}/>
              <Route exact path='/camera' component={cameraPage}/>
              <Route exact path='/detail' component={detailPage}/>
              <Route exact path='/history' component={historyPage}/>
              <Route exact path='/login' component={loginPage}/>
              <Route exact path='/history-mobile' component={historyMobilePage}/>
            </Switch>
          </div>
        // </AuthProvider>
    )
  };
}

export default App;