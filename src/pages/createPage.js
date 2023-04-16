import React from "react";
import { Create} from "../components";
import {Redirect} from "react-router";
import {useHistory} from "react-router-dom";

const createPage = () => {
  const history = useHistory()
  if (sessionStorage.getItem('access_token') === null) {
    history.push('/login')
  }

  return (
      <Create/>
  )
}
export default createPage;