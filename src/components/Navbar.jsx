// import 'cirrus-ui';
import React, {useState} from "react";
import "../App.css"
import {Link, useHistory} from "react-router-dom";
import {PauseOutlined} from "@ant-design/icons";

const Navbar = (props) => {
  const [openMenu, setOpenMenu] = useState(false)
  const pageName = props.name
  const history = useHistory();

  const logoutHandle = () => {
    sessionStorage.setItem('login', 'false')
    history.push('/')
  }
  return (
      <div className="nav-bg absolute top-0 w-full h-20">
        <div className="justify-between flex py-4 mx-4 h-16">
          <div className="flex">
            {pageName === 'CRAMERA' && pageName === 'HISTORY' &&
                <h6 className="text-white cursor-pointer mr-2" onClick={() => history.goBack()}>Back</h6>
            }
            <h6 className="mx-1 text-white cursor-pointer" onClick={() => history.push('/dashboard')}>Elephy</h6>
            <h6 className="text-white cursor-pointer" onClick={() => logoutHandle()}>Logout</h6>
          </div>
          <h4 className="text-white cursor-pointer">{pageName}</h4>
          <div className="flex">
            {pageName !== 'HISTORY' &&
                <h6 className="mx-1 text-white cursor-pointer" onClick={() => history.push('/history')}>History</h6>}
            {pageName !== 'CREATE NOTIFICATION' &&
                <h6 className="mx-1 text-white cursor-pointer" onClick={() => history.push('/create')}>Create</h6>}
            {pageName !== 'CAMERA' &&
                <h6 className="mx-1 text-white cursor-pointer" onClick={() => history.push('/camera')}>Camera</h6>}
            {/*<PauseOutlined onClick={() => setOpenMenu(!openMenu)}/>*/}
          </div>
        </div>
        {/*{openMenu &&*/}
        {/*    <div className="absolute top-20 right-4 bg-gray-200 rounded-md">*/}
        {/*      <p>menu</p>*/}
        {/*    </div>*/}
        {/*}*/}

      </div>
  );
};

export default Navbar;