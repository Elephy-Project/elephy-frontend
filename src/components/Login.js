import 'cirrus-ui';

import Navbar from "./Navbar";

const Dashboard = () => {

  return (
      <div className="Login">
        <Navbar/>
        <div className="hero fullscreen hero-img parallax-img">
          <div className="hero-body">
            <div className="content">
              <div className="card col-12">
                <div className="card__header">
                  <h3 className="title px-3 u-text-center">Login</h3>
                </div>
                <div className="row level">
                  <div className="col-3 level-item">
                    <p className="m-0">Username:</p>
                  </div>
                  <div className="col-8 level-item">
                    <input type="name" value=""/>
                  </div>
                </div>
                <div className="row level">
                  <div className="col-3 level-item">
                    <p className="m-0">Pasword:</p>
                  </div>
                  <div className="col-8 level-item m-0">
                    <input type="password" value=""/>
                  </div>
                </div>
                <div className="row">
                  <div className="btn px-4 mx-5 col-12">
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