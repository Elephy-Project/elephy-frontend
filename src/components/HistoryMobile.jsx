import 'cirrus-ui';
import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import {Button, Select, Table} from "antd";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import HistoryMobileMap from "./HistoryMapMobile";

const MONTH = [
  {value: 0, label: "January"},
  {value: 1, label: "February"},
  {value: 2, label: "March"},
  {value: 3, label: "April"}, {value: 4, label: "May"}, {
    value: 5, label: "June"
  }, {
    value: 6, label: "July"
  }, {value: 7, label: "August"}, {value: 8, label: "September"}, {
    value: 9, label: "October"
  }, {
    value: 10, label: "November"
  }, {value: 11, label: "December"}]

const YEAR = [{value: 2022, label: "2022"}, {value: 2023, label: "2023"},]

const SUM_COL = [
  {
    title: 'วันเวลา', dataIndex: 'dateTimeLabel', key: 'dateTime',
  },]

const HistoryMobile = () => {
  const [dataset, setDataSet] = useState([]); // change to record
  const [positionSet, setPositionSet] = useState([]);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(2023);
  const history = useHistory();
  const [records, setRecords] = useState([]);
  const [cameraInfo, setCameraInfo] = useState([])
  const [status, setStatus] = useState(0)
  const [token, setToken] = useState('')

  const login = async ( )=> {
    const request = new FormData()

    request.append('username', process.env.REACT_APP_USERNAME )
    request.append('password', process.env.REACT_APP_PASSWORD )
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_PATH}/token`, request).then(response => {
        return response
      })

      if (response.status === 200) {
        setToken(response.data.access_token)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const filterRecords = async () => {
    // && record.dateTime.getFullYear() === year
    const tempRecords = dataset.filter((record) => record.dateTime.getMonth() === month && record.dateTime.getFullYear() === year)
    setRecords(tempRecords)
    const tempLecoation = []

    tempRecords.map((record) =>
        tempLecoation.push(record.point)
    )
    setPositionSet(tempLecoation)
  }
  const fetchData = async () => {
    try {
      const data = await axios.get(`${process.env.REACT_APP_BASE_PATH}/elephant-records`, { headers: { Authorization: `Bearer ${token}` } }).then(response => {
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

        const defineLocation = record.informant.includes('camera') ? defindInfo(record.informant): null
        const formattedDate = date.toLocaleString('en-GB', options);
        tempRecords.push({
          key: record.id,
          id: id,
          informant: record.informant,
          location: defineLocation !== null ? defineLocation : `${record.location_lat} / ${record.location_long}`,
          dateTimeLabel: `${formattedDate}`,
          dateTime: date,
          point: {lat: record.location_lat, lng: record.location_long}
        })
      })
      setDataSet(tempRecords)
    } catch (e) {
      console.log(e)
    }
  }

  const defindInfo = (camName) => {
    const camera = cameraInfo.filter((cam) => cam.camera_id === camName)
    return `${camera[0].location_lat}/${camera[0].location_long}`
  }

  const fetchCamera = async () => {
    try {
      const camInfo = await axios.get(`${process.env.REACT_APP_BASE_PATH}/info-camera`, { headers: { Authorization: `Bearer ${token}` } }).then(response => {
        return response.data
      })
      setCameraInfo(camInfo)
    } catch (error) {
      console.log(error)
    }
  }

  const handleMonthOnChange = (value, label) => {
    setMonth(value)
  }

  const handleYearOnChange = (value, label) => {
    setYear(value)
  }

  useEffect(() => {
    login().then(r => '')
  }, [])
  useEffect(() => {
    fetchCamera().then(r => '');
  }, [token])

  useEffect(() => {
    fetchData().then(r => '');
  }, [cameraInfo])

  useEffect(() => {
    filterRecords().then(r => '')
  }, [dataset, month, year])

  return (
      <div className="sm page-bg h-full">
        <div className="h-14 py-2 nav-bg">
          <h4 className="text-white text-center">History</h4>
        </div>
        <div className="row col-12 pt-4 justify-center">
          <div className="flex  mb-2 mx-2">
            <Select
                className="mr-1"
                style={{width: 150}}
                defaultValue='January'
                bordered
                options={MONTH}
                onChange={handleMonthOnChange}
            />
            <Select
                className="ml-1"
                style={{width: 150}}
                defaultValue="2023"
                bordered
                options={YEAR}
                onChange={handleYearOnChange}
            />
          </div>
        <div className="row px-2">
          <div className=" col-12">
            <div className="">
              {positionSet && <HistoryMobileMap positionSet={positionSet}/>}
            </div>
          </div>
        </div>
        <div className="row px-2 pt-4">
            {dataset &&
                <Table
                    className="w-full"
                    columns={SUM_COL}
                    dataSource={records}
                    // onRow={(record, rowIndex) => {
                    //   return {
                    //     onClick: (event) => {
                    //       history.push({
                    //         pathname: '/detail', param: `${record.key}`,
                    //       })
                    //     },
                    //   }
                    // }}
                />
            }
          </div>
        </div>
      </div>
  );
}

export default HistoryMobile;