import 'cirrus-ui';
import React, {useEffect, useState} from "react";

import Navbar from "./Navbar";
import DetailMaps from "./DetailMaps";
import {useLocation} from "react-router";
import {MOCK_DATA, LOCATION} from "./data";
import {Button} from "antd";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const location = useLocation();
  const [notification, setNotification] = useState([]);
  const [selectedkey, setSelectedKey] = useState([]);
  const [position, setPosition] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [records, setRecords] = useState([])
  const history = useHistory();

  const fetchRecords = async () => {
    try {
      const data = await axios.get(`https://elephy-backend.vercel.app/elephant-records`).then(response => {
        return response.data
      })
      const temp = data.filter((t) => t.id === 'fee1a7f2-7485-4961-854c-e596f3973503')[0]
      // await setNotification(temp[0])
      const date = new Date(temp.datetime);
      const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Bangkok'
      };
      const formattedDate = date.toLocaleString('en-GB', options);

      const tempRecord = {
        key: temp.id,
        informant: temp.informant,
        location: `${temp.location_lat} / ${temp.location_long}`,
        dateTime: `${formattedDate}`,
        point: {lat: temp.location_lat, lng: temp.location_long}
      }

      console.log('temp', tempRecord)
      await setNotification(tempRecord)
      // data.map((record) => {
      //   id += 1
      //   const date = new Date(record.datetime);
      //   const options = {
      //     day: '2-digit',
      //     month: '2-digit',
      //     year: 'numeric',
      //     hour: '2-digit',
      //     minute: '2-digit',
      //     timeZone: 'Asia/Bangkok'
      //   };
      //   const formattedDate = date.toLocaleString('en-GB', options);
      //   tempRecords.push({
      //     key: record.id,
      //     id: id,
      //     informant: record.informant,
      //     location: `${record.location_lat} / ${record.location_long}`,
      //     dateTime: `${formattedDate}`
      //   })
      // })


      // setRecords(tempRecords)
    }
    catch (e) {
      console.log(e)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    setSelectedKey(location.param)
    // fetchNotification().then(r => '');
    fetchRecords().then(r => '')
    // fetchRecords().then(r => '');

  }, [location.param])

  // useEffect(() => {
  //   // setSelectedKey(location.param)
  //   fetchPosition().then(r => '');
  //
  // }, [notification])
  const fetchNotification = async () => {
    setIsLoading(true)
    await setSelectedKey(location.param)
    const temp = MOCK_DATA.filter((t) => t.key === '1')

    await setNotification(temp[0])
  }

  const fetchPosition = async () => {
    setIsLoading(true)
    const positionTemp = LOCATION.filter((pos) => pos.value === notification.location)
    setPosition(positionTemp[0])
    setIsLoading(false)
  }

  console.log("tempRecord", notification)
  return (
      // notification.length > 0 ? (
      <div className="Detail page-bg">
        <Navbar/>
        <div className="hero fullscreen">
          <div className="hero-body">
            <div className="content mt-4">
              <h5 className="px-4">Detail</h5>
              <div className="row px-2">
                <div className=" col-8">
                  <div className="card h-70p">
                    {notification && <DetailMaps position={notification.point}/>}
                  </div>
                </div>
                <div className="col-4">
                  <div className="row">
                    <div className="card col-12">
                      <div className="card__header px-2">
                        <h6>Location</h6>
                      </div>
                      <div className="card__body my-2 px-2">
                        <span>{notification.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="card col-12">
                      <div className="card__header px-2">
                        <h6>Informants</h6>
                      </div>
                      <div className="card__body my-2 px-2">
                        <span>{notification.informant}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="card col-12">
                      <div className="card__header px-2">
                        <h6>Date Time</h6>
                      </div>
                      <div className="card__body my-2 px-2">
                        <span>{notification.dateTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row" onClick={() => history.goBack()}>
                    {/*<Link to="/">*/}
                      <Button className="h-14 col-12"><p className="my-2">BACK</p></Button>
                    {/*</Link>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      // ) : null
  );
}

export default Detail;