import React from "react";
import { Detail} from "../components";
import {Redirect} from "react-router";
import {useHistory} from "react-router-dom";

const detailPage = () => {
  const history = useHistory()
  if (sessionStorage.getItem('access_token') === null) {
    history.push('/login')
  }
  return (
      <Detail/>
  )
}
export default detailPage;