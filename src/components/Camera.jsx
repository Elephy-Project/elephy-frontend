import 'cirrus-ui';
import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import {Button, Input, Select, Table} from "antd";
import {Link, useHistory} from "react-router-dom";
import SummaryMaps from "./HistoryMaps";
import axios from "axios";

const MONTH = [{value: 0, label: "January"}, {value: 1, label: "February"}, {
  value: 2, label: "March"
}, {alue: 3, label: "April"}, {value: 4, label: "May"}, {
  value: 5, label: "June"
}, {
  value: 6, label: "July"
}, {value: 7, label: "August"}, {value: 8, label: "Septembe"}, {
  value: 9, label: "October"
}, {
  value: 10, label: "November"
}, {value: 11, label: "December"}]

const YEAR = [{value: 2022, label: "2022"}, {value: 2023, label: "2023"},]

const SUM_COL = [{
  title: 'ID', dataIndex: 'id', key: 'id'
}, {
  title: 'ชื่อกล้อง', dataIndex: 'cameraId', key: 'cameraId'
}, {
  title: 'Location', dataIndex: 'location', key: 'location',
}, {
  title: 'วันเวลา', dataIndex: 'dateTimeLabel', key: 'dateTime',
},]

const Camera = () => {
  const [dataset, setDataSet] = useState([]); // change to record
  const [positionSet, setPositionSet] = useState([]);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(2023);
  const [newCam, setNewCam] = useState(false)
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')
  const [camId, setCamId] = useState('')

  useEffect(() => {
    fetchData().then(r => '');
  }, [])

  useEffect(() => {
    filterRecords().then(r => '')
  }, [dataset, month, year])

  const filterRecords = async () => {
    // && record.dateTime.getFullYear() === year
    const tempRecords = dataset.filter((record) => record.dateTime.getMonth() === month && record.dateTime.getFullYear() === year)
    setRecords(tempRecords)
    const tempLecoation = []

    tempRecords.map((record) => tempLecoation.push(record.point))
    setPositionSet(tempLecoation)
  }
  const fetchData = async () => {
    try {
      const data = await axios.get(`${process.env.REACT_APP_BASE_PATH}/info-camera`).then(response => {
        return response.data
      })
      let id = 0
      const tempRecords = []
      data.map((record) => {
        id += 1
        const date = new Date(record.datetime);

        const options = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Asia/Bangkok'
        };
        const formattedDate = date.toLocaleString('en-GB', options);
        tempRecords.push({
          key: record.id,
          id: id,
          cameraId: record.camera_id,
          location: `${record.location_lat} / ${record.location_long}`,
          dateTimeLabel: `${formattedDate}`,
          dateTime: date,
          point: {lat: record.location_lat, lng: record.location_long}
        })
      })
      const tempLecoation = []

      tempRecords.map((record) => tempLecoation.push(record.point))
      setPositionSet(tempLecoation)
      setDataSet(tempRecords)
    } catch (e) {
      console.log(e)
    }
    // setLoading(false)
  }

  const handleLatChange = (e) => {
    setLat(e.target.value)
  }

  const handleLonChange = (e) => {
    setLon(e.target.value)
  }

  const handleCamIdChange = (e) => {
    setCamId(e.target.value)
  }

  const haandleSubmit = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_PATH}/info-camera`, {
        camera_id: camId,
        location_lat: Number(lat),
        location_long: Number(lon),
      }).then(response => {
        return response.status
      })
      if (res === 200) {
        setLat('')
        setLon('')
        setCamId('')
      }
    } catch (error) {
      console.log(error)
    }
    setNewCam(false)
  }

  return (
      <div className="Summary page-bg h-screen">
        <Navbar name={'CAMERA'}/>
        {newCam ? (
            <div className=' row mt-8'>
              <div className='card col-12 mx-8 mt-12 px-4 py-12 pt-4'>
                <div className='card-body'>
                  <div className='row'>
                    <h6>Add Camera</h6>
                  </div>
                  <div className="flex justify-between w-full">
                    <div className='mr-1 col-4 w-full'>
                      <p>Latitude</p>
                      <Input onChange={handleLatChange} value={lat} type="Text" className="input--sm "
                             placeholder="Please input latitude data"/>
                    </div>
                    <div className='ml-1 mr-1 col-4 w-full'>
                      <p>Longitude</p>
                      <Input onChange={handleLonChange} value={lon} type="Text" className="input--sm "
                             placeholder="Please input longitude data"/>
                    </div>
                    <div className='ml-1 col-4 w-full'>
                      <p>Camera Id</p>
                      <Input onChange={handleCamIdChange} value={camId} type="Text" className="input--sm "
                             placeholder="Please input camera ID"/>
                    </div>
                  </div>
                  <div className='mt-4 mx-auto flex row justify-center'>
                    <div className=''>
                      <Button className="ml-auto mr-4 w-60 h-12 text-white bg-blue-500" type="primary"
                              onClick={haandleSubmit}>Submit</Button>
                    </div>
                    <div className=''>
                      <Button className="ml-2 w-60 h-12 text-white bg-red-500" type="danger"
                              onClick={() => setNewCam(false)}>Cancel</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ) : (
            <div className=" pt-10">
              {/*<div className="flex justify-end px-4">*/}
              {/*  <div className='flex'>*/}
              {/*    <div className="mt-4 justify-end" onClick={() => setNewCam(true)}>*/}
              {/*      <Button className="h-12 w-40"><p className='font-semibold'>New Camera</p></Button>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
              <div className="row px-2">
                <div className=" col-7">
                  <div className=" ">
                    {positionSet && <SummaryMaps positionSet={positionSet}/>}
                  </div>
                </div>
                <div className="col-5">
                  <div className='justify-end'>
                    <div className="mt-4 justify-end" onClick={() => setNewCam(true)}>
                      <Button className="h-12 w-40"><p className='font-semibold'>New Camera</p></Button>
                    </div>
                  </div>
                  {dataset && <Table
                      className="justify-end"
                      columns={SUM_COL}
                      dataSource={dataset}
                  />}
                </div>
              </div>
            </div>)}
      </div>);
}

export default Camera;