import 'cirrus-ui';
import React, {useEffect, useState} from "react";

import Navbar from "./Navbar";
import {Button, Input} from "antd";
import CreateMaps from "./CreateMap";
import {Link} from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')
  const [target, setTarget] = useState([])
  const [informant, setInformant] = useState('')

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
      const res = await axios.post(`https://elephy-backend.vercel.app/record`, {
        informant: informant,
        location_lat: Number(lat),
        location_long: Number(lon),
      }).then(response => {
        return response.status
      })
      if (res === 200) {
        setLat('')
        setLon('')
        setInformant('')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const informantHandle = (e) => {
    setInformant(e.target.value)
  }

  return (
      <div className="Create page-bg">
        <Navbar/>
        <div className="hero fullscreen u-text-center">
          <div className="hero-body">
            <div className="content mt-4">
              <h5 className="px-4"> Create New Notification</h5>
              <div className="row px-2">
                <div className=" col-7">
                  <div className="card h-70p">
                    <CreateMaps target={target}/>
                  </div>
                </div>
                <div className="col-5">
                  <div className="card col-12 mx-2">
                    <div className="card__header px-2">
                      <h6>Location</h6>
                    </div>
                    <div className="card__body my-2 px-1">
                      <div className="flex">
                        <Input onChange={handleLatChange} value={lat} type="Text" className="input--sm mr-1"
                               placeholder="Please input latitude data"/>
                        <Input onChange={handleLonChange} value={lon} type="Text" className="input--sm ml-1"
                               placeholder="Please input longitude data"/>
                      </div>
                    </div>
                  </div>
                  <div className="card col-12 mx-2">
                    <div className="card__header px-2">
                      <h6>Informant</h6>
                    </div>
                    <div className="card__body my-2 px-1">
                      <div>
                        <Input onChange={informantHandle} value={informant} type="Text" className="input--sm"
                               placeholder="Please specify informant name."/>
                      </div>
                    </div>
                  </div>
                  <div className="ml-2 mt-6 flex col-12">
                    <Button type="primary" block className="mr-4 h-12 text-white bg-blue-300" onClick={handleSubmit}>
                      <p>Submit</p></Button>
                    <Link to="/">
                      <Button className="h-12 w-32"><p className='font-bold'>BACK</p></Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>);
}

export default Create;