import 'cirrus-ui';
import React, {useEffect, useState} from "react";

import Navbar from "./Navbar";
import DetailMaps from "./DetailMaps";
import {useLocation} from "react-router";
import {Button} from "antd";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const location = useLocation();
  const [notification, setNotification] = useState([]);
  const [selectedkey, setSelectedKey] = useState([]);
  const [position, setPosition] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [records, setRecords] = useState([])
  const history = useHistory();

  const fetchRecords = async () => {
    console.log('key', location.param)
    setIsLoading(true)
    try {
      const data = await axios.get(`https://elephy-backend.vercel.app/elephant-records`).then(response => {
        console.log('response', response.data)
        return response.data
      })

      const temp = data.filter((t) => t.id === location.param.toString())[0]
      console.log('data', temp)

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

      const tempRecord = [{
        key: temp.id,
        informant: temp.informant,
        location: `${temp.location_lat} / ${temp.location_long}`,
        dateTime: `${formattedDate}`,
        point: {lat: temp.location_lat, lng: temp.location_long}
      }]
      setNotification(tempRecord[0])
      console.log('tempRecord', tempRecord)
    } catch (e) {
      console.log(e)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchRecords().then(r => '')
  }, [location.param])

  console.log('API: ', process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
  return (
      // notification.length > 0 ? (
      // isLoading ? (
          <div className="Detail page-bg">
            <Navbar/>
            <div className="hero fullscreen">
              <div className="hero-body">
                <div className="content mt-4">
                  <h5 className="px-4">Detail</h5>
                  <div className="row px-2">
                    <div className=" col-8">
                      <div className="card h-70p">
                        {<DetailMaps position={notification.point}/>}
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