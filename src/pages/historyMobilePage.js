import React from "react";
import HistoryMobile from "../components/HistoryMobile";
import {useHistory} from "react-router-dom";

const detailPage = () => {
  const history = useHistory()
  if (sessionStorage.getItem('access_token_line') === '') {
    history.push('/')
  }

  return (
      <HistoryMobile/>
  )
}
export default detailPage;