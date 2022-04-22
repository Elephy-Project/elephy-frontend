import 'cirrus-ui';

import Navbar from "./Navbar";

const Dashboard = () => {

  return (
      <div className="Home">
        <Navbar/>
        <section id={'splash'}>
          <div className="hero fullscreen hero-img parallax-img">
            <div className="hero-body">
              <div className="content u-text-center">
                <h1 className="uppercase white title" data-aos="zoom-in" data-aos-duration="1000">Elephy</h1>
                <h3 className="uppercase white sub-title faded" data-aos="zoom-in" data-aos-duration="1200">Dashboerd</h3>
              </div>
            </div>
          </div>
          <div className="transition transition--visible" />
        </section>
      </div>

  );
}

export default Dashboard;