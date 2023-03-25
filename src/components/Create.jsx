import 'cirrus-ui';
import React, {useEffect, useState} from "react";

import Navbar from "./Navbar";
import DetailMaps from "./DetailMaps";
import {Button, DatePicker, Input, InputNumber, Select, TimePicker} from "antd";
import CreateMaps from "./CreateMap";
import {LOCATION} from "./data";
import {Link} from "react-router-dom";

const Create = () => {
  // const [lat, setLat] = useState('')
  // const [lon, setLon] = useState('')

  const TIME_FORMAT = 'HH:mm';
  const DATE_FORMAT = 'DD-MM-YYYY'

  const [locationName, setLocationName] = useState('A')
  const [target, setTarget] = useState([])
  const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);
  const [informant, setInformant] = useState('')

  useEffect(() => {
    setPosition().then(r => '')
  }, [locationName])
  const setPosition = async () => {
    const positionTemp = LOCATION.filter((pos) => pos.value === locationName)
    setTarget(positionTemp[0].point)
  }

  // console.log('target', target)
  // const handleLatChange = (value) => {
  //   setLat(value)
  // }
  //
  // const handleLonChange = (value) => {
  //   setLon(value)
  // }

  // const handleSubmit = () => {
  //
  // }
  const handleSubmit = () => {
    setLocationName('A')
    setTarget([])
    setDate(null)
    setTime(null)
    setInformant('')
    console.log('call')
  }

  return (<div className="Create page-bg">
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
                        <Select
                            className="w-full"
                            defaultValue="A"
                            // bordered
                            options={LOCATION}
                            onChange={setLocationName}
                        />
                        {/*<InputNumber type="number" className="w-1/2 mr-1" placeholder={"Lat"} onChange={handleLatChange}/>*/}
                        {/*<InputNumber type="number" className="w-1/2 ml-1" placeholder={"Lon"} onChange={handleLonChange}/>*/}
                      </div>
                    </div>
                  </div>
                  <div className="card col-12 mx-2">
                    <div className="card__header px-2">
                      <h6>Informant</h6>
                    </div>
                    <div className="card__body my-2 px-1">
                      <div>
                        <Input onChange={setInformant} type="Text" value={informant} className="input--sm" placeholder="Notification Title is here"/>
                      </div>
                    </div>
                  </div>
                  <div className="card col-12 mx-2">
                    <div className="card__header px-2">
                      <h6>Date/Time</h6>
                    </div>
                    <div className="card__body my-2 px-2 ">
                      <TimePicker className="mr-2" style={{border: 0}} value={time} format={TIME_FORMAT} onChange={setTime}/>
                      <DatePicker className="ml-2" style={{border: 0}} onChange={setDate} format={DATE_FORMAT} value={date}/>
                    </div>
                  </div>
                  <div className="ml-2 mt-6 flex col-12">
                    <Button type="primary" block className="mr-4 h-12 text-white bg-blue-300" onClick={handleSubmit}><p>Submit</p></Button>
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