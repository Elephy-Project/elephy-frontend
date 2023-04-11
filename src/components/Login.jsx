// import 'cirrus-ui';
import React, {useState} from "react";
import {Button, Input} from "antd";
// import Navbar from "./Navbar";
// import {Button, Input, Select, Table} from "antd";
import {Link, useHistory} from "react-router-dom";
// import {default} from "@chakra-ui/react";

const DEFAULT_USERNAME = process.env.REACT_APP_USERNAME
const DEFAULT_PASSWORD = process.env.REACT_APP_PASSWORD
const Login = () => {
  const history = useHistory()
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmission = (e) => {
    console.log('top', password, username)
    console.log(DEFAULT_USERNAME, DEFAULT_PASSWORD)
    history.push('/')
    // if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD){
    //   console.log(password, username)
    //   history.push('/')
    // }
  }
  return (
      <div className="bg-slate-500 h-screen text-center justify-center items-center">
        <div className="">
          <h1 className="pt-24 text-white">LOGIN</h1>
        </div>
        <div className="justify-center mx-96">
          <Input className="w-48 mx-2 my-2"
                 size="small"
                 placeHolder={'Username'}
                 value={username}
                 onChange={handleUsernameChange}
                 required
          />
          <Input className="w-10 mx-2 my-2 p-2 border border-gray-400 rounded-lg"
                 placeHolder={'Password'}
                 size="small"
                 type="password"
                 id="password"
                 value={password}
                 onChange={handlePasswordChange}
                 required
          />
          <Button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 my-2 rounded-lg shadow-md h-16"
              onClick={handleSubmission}
          > SUBMIT </Button>

        </div>
      </div>
  )
}

export default Login;