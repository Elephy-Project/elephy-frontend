import {Dashboard, Login, LineInbox, CamInbox, Create, LineDetail, CamDetail, Summary} from "./components";
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
            <Route path='/cam-inbox' element={<CamInbox />} />
            <Route path='/line-inbox' element={<LineInbox />} />
            <Route path='/create' element={<Create />} />
            <Route path='/line-detail' element={<LineDetail />} />
            <Route path='/cam-detail' element={<CamDetail />} />
            <Route path='/summary' element={<Summary />} />
          </Routes>
        </BrowserRouter>
    )
  };
}

export default App;