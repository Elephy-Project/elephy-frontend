// import 'cirrus-ui';
import React, {useState} from "react";
import {Button, Input} from "antd";
// import Navbar from "./Navbar";
// import {Button, Input, Select, Table} from "antd";
import {Link, useHistory} from "react-router-dom";
// import {default} from "@chakra-ui/react";

const DEFAULT_USERNAME = process.env.REACT_APP_USERNAME
const DEFAULT_PASSWORD = process.env.REACT_APP_PASSWORD
const Landing = () => {
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
    if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD){
      console.log(password, username)
      setUSER(true)
      history.push('/')
    }
  }
  return (
      <div className="bg-slate-500 h-screen text-center justify-center items-center">

      </div>
  )
}

export default Landing;