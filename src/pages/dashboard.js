import React from "react";
import {Dashboard} from "../components";
import {Redirect} from "react-router";
import {useHistory} from "react-router-dom";

const dashboardPage = () => {
  const history = useHistory()

  if (sessionStorage.getItem('access_token') === '') {
    history.push('/login')
  }

  return(
      <Dashboard/>

  )
}
export default dashboardPage;