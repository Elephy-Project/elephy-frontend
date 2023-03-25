import 'cirrus-ui';
import React, {useEffect, useState} from "react";

import Navbar from "./Navbar";
import DetailMaps from "./DetailMaps";
import {Button, Select, Table} from "antd";
import {LOCATION, MOCK_DATA} from "./data";
import {Link, useHistory} from "react-router-dom";
import SummaryMaps from "./SummaryMaps";
import {useLocation} from "react-router";

const MONTH = [{value: "01", label: "January"}, {value: "02", label: "February"}, {
  value: "03", label: "March"
}, {alue: "04", label: "April"}, {value: "05", label: "May"}, {
  value: "06", label: "June"
}, {
  value: "07", label: "July"
}, {value: "08", label: "August"}, {value: "09", label: "Septembe"}, {
  value: "10", label: "October"
}, {
  value: "11", label: "November"
}, {value: "12", label: "December"}]

const YEAR = [{value: "2022", label: "2022"}, {value: "2023", label: "2023"},]

const SUM_COL = [{
  title: 'ID', dataIndex: 'id', key: 'id'
}, {
  title: 'ชื่อจุด', dataIndex: 'location', key: 'location'
}, {
  title: 'ผู้แจ้งเตือน', dataIndex: 'informant', key: 'informant',
}, {
  title: 'วันเวลา', dataIndex: 'dateTime', key: 'dateTime',
},]

const Summary = () => {
  const [dataset, setDataSet] = useState([]);
  const [positionSet, setPosition] = useState([]);
  const [month, setMonth] = useState('01');
  const [year, setYear] = useState('2023');
  const history = useHistory();


  useEffect(() => {
    declairPosition().then(r => '');
  }, [dataset])
  useEffect(() => {
    declairDataSet().then(r => '');
  }, [month, year])
  const declairDataSet = async () => {
    const tempData = MOCK_DATA.filter((temp) => temp.dateTime.includes(`-${month}-`) && temp.dateTime.includes(`-${year}`))
    await setDataSet(tempData)
  }

  const declairPosition = async () => {
    const tempPositionSet = []
    if (dataset.length > 0) {
      dataset.map((data) => {
        const temp = LOCATION.filter((pos) => pos.value === data.location)
        tempPositionSet.push(temp[0].point)
      })
    }
    setPosition(tempPositionSet)
  }

  return (<div className="Summary page-bg">
    <Navbar/>
    <div className="hero fullscreen">
      <div className="hero-body">
        <div className="content mt-4">
          <div className="flex justify-between px-4">
            <h5 className="">History</h5>
            <Link to="/">
              <Button className="h-12 w-32"><p>BACK</p></Button>
            </Link>
          </div>
          <div className="row px-2">
            <div className=" col-7">
              <div className=" ">
                {positionSet && <SummaryMaps positionSet={positionSet}/>}
              </div>
            </div>
            <div className="col-5">
              <div className="flex justify-end mb-2">
                <Select
                    className="mr-1"
                    style={{width: 200}}
                    defaultValue="01"
                    bordered
                    options={MONTH}
                    onChange={setMonth}
                />
                <Select
                    className="ml-1"
                    style={{width: 200}}
                    defaultValue="2023"
                    bordered
                    options={YEAR}
                    onChange={setYear}
                />
              </div>
              {dataset &&
                  <Table
                      className="justify-end"
                      columns={SUM_COL}
                      dataSource={dataset}
                      onRow={(record, rowIndex) => {
                        return {
                          onClick: (event) => {
                            history.push({
                              pathname: '/detail', param: `${record.key}`,
                            })
                            // <Link to={`/detail/${record.key}`}/>
                          },
                        }
                      }}
                  />
              }
            </div>
            {/*<div className="row">*/}
            {/*  <Link to="/">*/}
            {/*    <Button className="h-12"><p>BACK</p></Button>*/}
            {/*  </Link>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  </div>);
}

export default Summary;