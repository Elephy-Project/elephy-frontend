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
  const INBOX_COL = [{
    title: 'วันเวลา', dataIndex: 'dateTime', key: 'dateTime',
  }, {
    title: 'สถานที่', dataIndex: 'location', key: 'location',
  }, {
    title: 'ผู้แจ้ง', dataIndex: 'informant', key: 'informant',
  },]

  const fetchData = async () => {
    try {
      console.log(process.env.REACT_APP_BASE_PATH)
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
        const formattedDate = date.toLocaleString('en-GB', options);
        tempRecords.push({
          key: record.id,
          id: id,
          informant: record.informant,
          location: `${record.location_lat} / ${record.location_long}`,
          dateTime: `${formattedDate}`
        })
      })


      setRecords(tempRecords)
    } catch (e) {
      console.log(e)
    }
    setLoading(false)
  }

  useEffect(() => {
    console.log('call')
    fetchData().then(r => null)
  }, [])

  return (// <h1> hello world</h1>
      (records.length > 0) ? (
          <div className="page-bg h-screen">
            <Navbar/>
            <div className="mt-6 flex justify-between">
              <h3 className="mx-8 pt-8">Inbox</h3>
              <div className="pt-8 mx-8">
                <Button className="h-12 w-32 mr-2" onClick={() => history.push('/camera')}><p>Camera</p></Button>
                <Button className="h-12 w-32 ml-2" onClick={() => history.push('/create')}><p>Create</p></Button>
              </div>
            </div>
            <div>
              <Table
                  className="mx-4"
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