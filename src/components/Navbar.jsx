// import 'cirrus-ui';
import React from "react";
import "../App.css"
import {Link, useHistory} from "react-router-dom";

const Navbar = (props) => {
  const pageName = props.name
  const history = useHistory();
  return (
      <div className="nav-bg absolute top-0 w-full h-20">
        <div className="justify-between flex py-4 mx-4 h-16">
          <div className="flex">
            {pageName !== 'CREATE NOTIFICATION' &&
                <h6 className="text-white cursor-pointer mr-2" onClick={() => history.goBack()}>Back</h6>
            }
            <h6 className="text-white cursor-pointer" onClick={() => history.push('/dashboard')}>Elephy</h6>
          </div>
          <h4 className="text-white cursor-pointer">{pageName}</h4>
          <div className="flex">
            {pageName !== 'HISTORY' &&
                <h6 className="mx-1 text-white cursor-pointer" onClick={() => history.push('/history')}>History</h6>}
            {pageName !== 'CREATE NOTIFICATION' &&
                <h6 className="mx-1 text-white cursor-pointer" onClick={() => history.push('/create')}>Create</h6>}
            {pageName !== 'CAMERA' &&
                <h6 className="mx-1 text-white cursor-pointer" onClick={() => history.push('/camera')}>Camera</h6>}
          </div>
        </div>
      </div>
  );
};

export default Navbar;