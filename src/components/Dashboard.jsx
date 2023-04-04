import 'cirrus-ui';
import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import {MOCK_DATA} from "./data";
import {Button, Table} from "antd";
import {Link, useHistory} from "react-router-dom";
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
      const data = await axios.get(`https://elephy-backend.vercel.app/elephant-records`).then(response => {
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
    fetchData().then(r => null)
  }, [])

  return (// <h1> hello world</h1>
      (records.length > 0) ?
          (<div className="Dashboard page-bg ">
            <Navbar/>
            <div className="hero fullscreen u-text-center">
              <div className="hero-body">
                <div className="content mt-4">
                  <div className="flex mt-6 mx-8 justify-between">
                    <div>
                      <h3 className="title">Inbox</h3>
                    </div>
                    <div className='flex'>
                      <div className="">
                        <Link to="/camera">
                          <Button className="h-12 w-32"><p>Camera</p></Button>
                        </Link>
                      </div>
                      <div className="">
                        <Link to="/create">
                          <Button className="h-12 w-32"><p>Create</p></Button>
                        </Link>
                      </div>

                    </div>
                  </div>
                  <Table
                      className="mx-4"
                      columns={INBOX_COL}
                      dataSource={records}
                      onRow={(record, rowIndex) => {
                        return {
                          onClick: (event) => {
                            history.push({
                              pathname: '/detail',
                              param: `${record.key}`,
                            })
                          },
                        }
                      }
                      }
                  />
                </div>
              </div>
            </div>
          </div>) : null
  )
      ;
};

export default Dashboard;