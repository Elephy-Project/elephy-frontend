import 'cirrus-ui';
import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import {Button, Select, Table} from "antd";
import {Link, useHistory} from "react-router-dom";
import SummaryMaps from "./HistoryMaps";
import axios from "axios";

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
    title: 'ผู้แจ้งเตือน', dataIndex: 'informant', key: 'informant',
  },
  {
    title: 'Location', dataIndex: 'location', key: 'location'
  }, {
    title: 'วันเวลา', dataIndex: 'dateTimeLabel', key: 'dateTime',
  },]

const History = () => {
  const [dataset, setDataSet] = useState([]); // change to record
  const [positionSet, setPositionSet] = useState([]);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(2023);
  const history = useHistory();
  const [records, setRecords] = useState([]);


  // useEffect(() => {
  //   declairPosition().then(r => '');
  // }, [dataset])

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

    tempRecords.map((record) =>
        tempLecoation.push(record.point)
    )
    setPositionSet(tempLecoation)
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
        const formattedDate = date.toLocaleString('en-GB', options);
        tempRecords.push({
          key: record.id,
          id: id,
          informant: record.informant,
          location: `${record.location_lat} / ${record.location_long}`,
          dateTimeLabel: `${formattedDate}`,
          dateTime: date,
          point: {lat: record.location_lat, lng: record.location_long}
        })
      })
      setDataSet(tempRecords)
    } catch (e) {
      console.log(e)
    }
    // setLoading(false)
  }

  const handleMonthOnChange = (value, label) => {
    console.log(value)
    setMonth(value)
  }

  const handleYearOnChange = (value, label) => {
    setYear(value)
  }

  return (
      <div className="page-bg h-hull w-full">
        <Navbar name={'HISTORY'}/>
        <div className="row px-4 pt-12">
          <div className=" col-7">
            <div className="ml-1">
              {positionSet && <SummaryMaps positionSet={positionSet}/>}
            </div>
          </div>
          <div className="col-5 ">
            <div className="flex justify-end mb-2">
              <Select
                  className="mr-1"
                  style={{width: 200}}
                  defaultValue='January'
                  bordered
                  options={MONTH}
                  onChange={handleMonthOnChange}
              />
              <Select
                  className="ml-1"
                  style={{width: 200}}
                  defaultValue="2023"
                  bordered
                  options={YEAR}
                  onChange={handleYearOnChange}
              />
            </div>
            {dataset &&
                <Table
                    className="justify-end"
                    columns={SUM_COL}
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
            }
          </div>
        </div>
      </div>
      // <div className="Summary page-bg">
      //   <Navbar/>
      //   <div className="hero fullscreen">
      //     <div className="hero-body">
      //       <div className="content mt-4">
      //         <div className="flex justify-between px-4">
      //           <h5 className="">History</h5>
      //           <Link to="/">
      //             <Button className="h-12 w-32"><p>BACK</p></Button>
      //           </Link>
      //         </div>
      //         <div className="row px-2">
      //           <div className=" col-7">
      //             <div className=" ">
      //               {positionSet && <SummaryMaps positionSet={positionSet}/>}
      //             </div>
      //           </div>
      //           <div className="col-5">
      //             <div className="flex justify-end mb-2">
      //               <Select
      //                   className="mr-1"
      //                   style={{width: 200}}
      //                   defaultValue='January'
      //                   bordered
      //                   options={MONTH}
      //                   onChange={handleMonthOnChange}
      //               />
      //               <Select
      //                   className="ml-1"
      //                   style={{width: 200}}
      //                   defaultValue="2023"
      //                   bordered
      //                   options={YEAR}
      //                   onChange={handleYearOnChange}
      //               />
      //             </div>
      //             {dataset &&
      //                 <Table
      //                     className="justify-end"
      //                     columns={SUM_COL}
      //                     dataSource={records}
      //                     onRow={(record, rowIndex) => {
      //                       return {
      //                         onClick: (event) => {
      //                           history.push({
      //                             pathname: '/detail', param: `${record.key}`,
      //                           })
      //                         },
      //                       }
      //                     }}
      //                 />
      //             }
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
  );
}

export default History;