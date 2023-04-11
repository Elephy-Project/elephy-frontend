// import 'cirrus-ui';
import React from "react";
import "../App.css"
import {Link, useHistory} from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  return (
      <div className="nav-bg absolute top-0 w-full h-14">
        <div className="justify-between flex py-3 mx-4 h-16">
          <h6 className="text-white cursor-pointer" onClick={() => history.push('/')}>Elephy</h6>
          <h6 className="text-white cursor-pointer" onClick={() => history.push('/history')}>History</h6>
        </div>
      </div>
  );
};

export default Navbar;