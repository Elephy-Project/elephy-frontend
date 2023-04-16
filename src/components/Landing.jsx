// import 'cirrus-ui';
import React, {useState} from "react";
import {Button, Input} from "antd";
// import Navbar from "./Navbar";
// import {Button, Input, Select, Table} from "antd";
import {Link, useHistory} from "react-router-dom";
import {AimOutlined, AlertFilled, AlertOutlined, CommentOutlined} from "@ant-design/icons";
// import {default} from "@chakra-ui/react";
import line_qr from '../components/images/line_qr.png'
import {position} from "@chakra-ui/react";

const DEFAULT_USERNAME = process.env.REACT_APP_USERNAME
const DEFAULT_PASSWORD = process.env.REACT_APP_PASSWORD
const Landing = () => {
  const history = useHistory()

  return (
      <div className="bg-slate-600 h-full text-center justify-center items-center">
        <div onClick={() => history.push('/login')}>
          <p className="mx-4 py-2 cursor-pointer text-white text-lg font-bold text-right">Login</p>
        </div>
        <div className="items-center py-64">
          <h1 className="text-center my-auto text-white text-8xl">ELEPHY</h1>
          <h1 className="mt-4 text-gray-500">A system for elephant detection.</h1>
        </div>
        <div className="flex px-40 py-48 justify-between">
          <p className="text-white text center text-4xl">A community-wide effort to inform community members about the encroachment of wild elephants.</p>
        </div>
        <div className="flex px-40 py-48 justify-between">
          <div>
            <CommentOutlined style={{ fontSize: '160px', color: '#ffff'}} />
            <p className="text-center text-xl text-white whitespace-normal mt-4">The community can communicate with the officer via Line chat bot.</p>
          </div>
          <div className="px-8" >
            <AlertFilled style={{ fontSize: '160px', color: '#ffff' }} />
            <p className="text-center text-xl text-white whitespace-normal mt-4">The system will broadcast the new detection via line chat bot every 5 mins</p>
          </div>
          <div>
            <AimOutlined style={{ fontSize: '160px', color: '#ffff' }} />
            <p className="text-center text-xl text-white whitespace-normal mt-4">The detection update is from the camera, the officer and user.</p>
          </div>
        </div>
        <div className=" px-40 py-48 item-center justify-center">
          <p className="text-white text-xl"> Jion Us </p>
          <div className="mx-auto my-auto">
            <img src={line_qr} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
          </div>
          <p className="text-white mt-4 text-xl">@894lfpzj</p>
        </div>
      </div>
  )
}

export default Landing;