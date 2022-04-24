import 'cirrus-ui';

import Navbar from "./Navbar";

const Dashboard = () => {

  return (
      <div className="Login">
        <Navbar/>
        <div className="hero fullscreen hero-img parallax-img">
          <div className="hero-body">
            <div className="content u-text-center">
              <div className="tile u-items-center mb-3">
                <div className="tile__icon">
                  <h1>Test</h1>
                </div>
                <div className="tile__container">
                  <p className="tile__title m-0">Polarity.exe</p>
                  <p className="tile__subtitle m-0">953KB / 1.1MB - 3 seconds...</p>
                </div>
                <div className="tile__buttons">
                  <button className="btn-transparent p-0"><span className="icon"><i
                      className="fa fa-wrapper small fa-ellipsis-v" aria-hidden="true"></i></span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

);
}

export default Dashboard;