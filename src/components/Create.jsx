import 'cirrus-ui';
import React, {useEffect, useState} from "react";

import Navbar from "./Navbar";
import {Button, Input} from "antd";
import CreateMaps from "./CreateMap";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import {WarningFilled} from "@ant-design/icons";

const CreateModal = ({setCreateSuccess}) => {
  const handleSubmission = () => {
    setCreateSuccess(false)
  }
  return (
      <>
        <div className="bg-white rounded-lg my-56 mx-96 py-6 ">
          <WarningFilled style={{fontSize: '50px', color: '#03fc77',  margin: 'auto'}}/>
          <p className="pt-2 text-center mx-16">Notification create success</p>
          <Button type="primary" danger className='w-48 justify-center text-white font-bold h-10'
                  onClick={() => handleSubmission()}>OK</Button>
        </div>
      </>
  )
}

const Create = () => {
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')
  const [target, setTarget] = useState([])
  const [informant, setInformant] = useState('')
  const [createSuccess, setCreateSuccess] = useState(false)
  const history = useHistory()
  const TOKEN = sessionStorage.getItem('access_token')

  useEffect(() => {
    setPosition().then(r => '')
  }, [lat, lon])
  const setPosition = async () => {
    const positionTemp = {lat: Number(lat), lng: Number(lon)}
    setTarget(positionTemp)
  }

  const handleLatChange = (e) => {
    setLat(e.target.value)
  }

  const handleLonChange = (e) => {
    setLon(e.target.value)
  }

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_PATH}/record`, {
        informant: informant,
        location_lat: Number(lat),
        location_long: Number(lon),
      }, {headers: {Authorization: `Bearer ${TOKEN}`}}).then(response => {
        return response.status
      })
      if (res === 200) {
        setLat('')
        setLon('')
        setInformant('')
        setCreateSuccess(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const informantHandle = (e) => {
    setInformant(e.target.value)
  }

  return (
      <div className="page-bg h-screen justify-center text-center items-center">
        <Navbar name={'CREATE NOTIFICATION'}/>
        <div className="mt-6 flex">
          <div className="pt-10">
            <div className="pl-8 pr-4">
              <CreateMaps target={target}/>
            </div>
          </div>
          <div className="pt-16 pr-8">
            <div className="card col-12 px-2">
              <div className="card__header px-2 pt-4">
                <h6>Location</h6>
              </div>
              <div className="card__body my-2 px-1 ">
                <div className="flex">
                  <Input onChange={handleLatChange} value={lat} type="Text" className="input--sm mr-1"
                         placeholder="Please input latitude data"/>
                  <Input onChange={handleLonChange} value={lon} type="Text" className="input--sm ml-1"
                         placeholder="Please input longitude data"/>
                </div>
              </div>
            </div>
            <div className="card col-12 px-2">
              <div className="card__header px-2 pt-4">
                <h6>Informant</h6>
              </div>
              <div className="card__body my-2 px-2">
                <div>
                  <Input onChange={informantHandle} value={informant} type="Text" className="input--sm"
                         placeholder="Please specify informant name."/>
                </div>
              </div>
            </div>
            <div className=" mt-12 flex col-12 ">
              <Button type="primary" block className="mr-4 h-12 w-20 text-white bg-blue-300" onClick={handleSubmit}>
                <p>Submit</p></Button>
              <Button className="h-12 w-44" onClick={() => history.goBack()}><p className='font-bold'>BACK</p>
              </Button>
            </div>
          </div>
        </div>
        {createSuccess ?
            <div className='overflow-y-auto fixed top-0 right-0 left-0 z-50 w-full h-full justify-center'
                 style={{background: 'rgba(0, 0, 0, 0.4)'}}>
              <CreateModal setCreateSuccess={setCreateSuccess}/>
            </div> : null}
      </div>
  );
}

export default Create;