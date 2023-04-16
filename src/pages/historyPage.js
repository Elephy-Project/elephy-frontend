import React, {useContext} from "react";
import { History} from "../components";
import {Redirect} from "react-router";
import {useHistory} from "react-router-dom";

const historyPage = () => {
  const history = useHistory()
  if (sessionStorage.getItem('access_token') === null) {
    history.push('/login')
  }
  return (
      <History/>
  )
}
export default historyPage;