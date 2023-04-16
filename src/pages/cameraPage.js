import React from "react";
import { Camera} from "../components";
import {Redirect} from "react-router";
import {useHistory} from "react-router-dom";

const CameraPage = () => {
  const history = useHistory()
  if (sessionStorage.getItem('access_token') === null) {
    history.push('/login')
  }
  return (
      <Camera/>
  )
}
export default CameraPage;