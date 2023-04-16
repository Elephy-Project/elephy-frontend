// import 'cirrus-ui';
import React, {useContext, useState} from "react";
import {Button, Input} from "antd";
import {Link, useHistory} from "react-router-dom";
import {WarningFilled} from "@ant-design/icons";
import axios from "axios";
// import {AuthContext} from "./AuthProvider";
// import {default} from "@chakra-ui/react";

const DEFAULT_USERNAME = process.env.REACT_APP_USERNAME
const DEFAULT_PASSWORD = process.env.REACT_APP_PASSWORD

const LoginModal = ({setLoginWrong}) => {
  const handleOK = () => {
    setLoginWrong(false)
  }
  return (
      <>
        <div className="bg-white rounded-lg my-56 mx-96 py-6">
          <WarningFilled style={{fontSize: '50px', color: '#fcbe03'}}/>
          <p className="pt-2">Sorry the Username or Password is not correct, please try again</p>
          <Button type="primary" danger className='w-40 text-white font-bold h-10'
                  onClick={() => handleOK()}>OK</Button>
        </div>
      </>
  )
}

const Login = () => {
  const history = useHistory()
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [loginWrong, setLoginWrong] = useState(false)
  const request = new FormData();

  const config = {
    headers: { 'Content-Type': 'application/json' }
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmission = async (e) => {
    request.append('username', username )
    request.append('password', password )

    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_PATH}/token`, request).then(response => {
        return response
      })
      if (response.status === 200) {
        sessionStorage.setItem('access_token', response.data.access_token)
        history.push('/dashboard')
      } else {
        setLoginWrong(true)
      }
    } catch (error) {
      console.log(error)
      setLoginWrong(true)
    }
  }

  return (<>
    <div className="bg-slate-500 h-screen text-center justify-center items-center">
      <div>
        <div className="">
          <h1 className="pt-24 text-white">LOGIN</h1>
        </div>
        <div className="justify-center mx-96">
          <Input className="my-2"
                 size="small"
                 placeholder={'Username'}
                 value={username}
                 onChange={handleUsernameChange}
                 required
          />
          <Input className="my-2"
                 placeholder={'Password'}
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
      {loginWrong ?
          <div className='overflow-y-auto fixed top-0 right-0 left-0 z-50 w-full h-full justify-center'
               style={{background: 'rgba(0, 0, 0, 0.4)'}}>
            <LoginModal setLoginWrong={setLoginWrong}/>
          </div>
          : null
      }
    </div>
  </>)
}

export default Login;