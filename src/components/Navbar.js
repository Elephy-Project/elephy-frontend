import 'cirrus-ui';
import React from "react";
import "../App.css"

const Navbar = () => {

  return (
      <div className="header header-fixed unselectable header-animated nav-bg" style={{zIndex: 30}}>
        <div className="header-brand">
          <div className="nav-item no-hover">
            <a href="/"><h6 className="title">Elephy</h6></a>
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
              <a href="/summary"><h6 className="title">sum</h6></a>
            </div>
            <div className="nav-item">
              <a href="/login"><h6 className="title">Logout</h6></a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Navbar;