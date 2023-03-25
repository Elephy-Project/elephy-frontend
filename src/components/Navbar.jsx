import 'cirrus-ui';
import React from "react";
import "../App.css"
import {Link} from "react-router-dom";

const Navbar = () => {

  return (
      <div className="header header-fixed unselectable header-animated nav-bg" style={{zIndex: 30}}>
        <div className="header-brand">
          <div className="nav-item no-hover">
            <Link to="/"><h6>Elephy</h6></Link>
          </div>
          <div className="nav-item nav-btn" id="header-btn">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="header-nav">
          <div className="nav-right">
            <div className="nav-item">
              <Link to="/summary"><h6 className="title">History</h6></Link>
            </div>
            {/*<div className="nav-item">*/}
            {/*  <Link to="/"><h6 className="title">Logout</h6></a>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
  );
};

export default Navbar;