import 'cirrus-ui';

import Navbar from "./Navbar";

const Dashboard = () => {

  return (
      <div className="Login">
        <Navbar/>
        <div className="hero fullscreen hero-img parallax-img login-bg">
          <div className="hero-body">
            <div className="content">
              <div className="card u-shadow-md login-bg col-12">
                <div className="card__header u-text-center">
                  <h3 className="title px-3 text-white">Login</h3>
                </div>
                <div className="row pt-5 level">
                  <div className="col-3 level-item">
                    <p className="m-0 text-white">Username:</p>
                  </div>
                  <div className="col-8 level-item">
                    <input type="name" value=""/>
                  </div>
                </div>
                <div className="row level">
                  <div className="col-3 level-item">
                    <p className="m-0 text-white">Pasword:</p>
                  </div>
                  <div className="col-8 level-item m-0">
                    <input type="password" value=""/>
                  </div>
                </div>
                <div className="u-center py-5">
                  <div className="btn px-4 mx-5 w-40p u-round-full">
                    <a href="/">Login</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default Dashboard;