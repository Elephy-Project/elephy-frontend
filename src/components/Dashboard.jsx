import 'cirrus-ui';
import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import {Button, Table} from "antd";
import {useHistory} from "react-router-dom";
import axios from "axios";


const Dashboard = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true)
  const [records, setRecords] = useState([])
  const [cameraInfo, setCameraInfo] = useState([])
  const INBOX_COL = [{
    title: 'วันเวลา', dataIndex: 'dateTime', key: 'dateTime',
  },
    {
      title: 'สถานที่', dataIndex: 'location', key: 'location',
    }, {
      title: 'ผู้แจ้ง', dataIndex: 'informant', key: 'informant',
    },]

  const fetchCamera = async () => {
    try {
      const camInfo = await axios.get(`${process.env.REACT_APP_BASE_PATH}/info-camera`).then(response => {
        return response.data
      })
      setCameraInfo(camInfo)
    } catch (error) {
      console.log(error)
    }
  }
  const fetchData = async () => {
    try {
      const data = await axios.get(`${process.env.REACT_APP_BASE_PATH}/elephant-records`).then(response => {
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
          dateTime: `${formattedDate}`,
          // imgLink: record.img_link ? record.img_link:null
        })
      })
      setRecords(tempRecords)
    } catch (e) {
      console.log(e)
    }
    setLoading(false)
  }

  const defindInfo = (camName) => {
    const camera = cameraInfo.filter((cam) => cam.camera_id === camName)
    return `${camera[0].location_lat}/${camera[0].location_long}`
  }

  useEffect(() => {
    fetchCamera().then(r => null)
  }, [])

  useEffect(() => {
    fetchData().then(r => null)
  }, [cameraInfo])

  return (// <h1> hello world</h1>
      (records.length > 0) ? (
          <div className="page-bg h-full ">
            <Navbar name={'INBOX'}/>
            <div className="row ">
              <Table
                  className="mx-4 mt-12 w-full"
                  columns={INBOX_COL}
                  dataSource={records}
                  onRow={(record, rowIndex) => {
                    return {
                      onClick: (event) => {
                        history.push({
                          pathname: '/detail', param: `${record.key}`,
                        })
                      },
                    }
                  }}
              />
            </div>
          </div>
      ) : null);
};

export default Dashboard;