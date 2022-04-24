import { Dashboard, Login, New, LineInbox, CamInbox } from "./components";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import {Component} from "react";

class App extends Component {

  componentDidMount() {
  }

  render() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/new' element={<New />} />
            <Route path='/cam-inbox' element={<CamInbox />} />
            <Route path='/line-inbox' element={<LineInbox />} />
          </Routes>
        </BrowserRouter>
    )
  };
}

export default App;