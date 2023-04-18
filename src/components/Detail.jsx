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
  const [cameraInfo, setCameraInfo] = useState([])
  const history = useHistory();
  const TOKEN = sessionStorage.getItem('access_token')

  const fetchCamera = async () => {
    try {
      const camInfo = await axios.get(`${process.env.REACT_APP_BASE_PATH}/info-camera`, { headers: { Authorization: `Bearer ${TOKEN}` } }).then(response => {
        return response.data
      })
      setCameraInfo(camInfo)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchRecords = async () => {
    try {
      const data = await axios.get(`${process.env.REACT_APP_BASE_PATH}/elephant-records`, { headers: { Authorization: `Bearer ${TOKEN}` } }).then(response => {
        return response.data
      })

      const temp = data.filter((t) => t.id === location.param.toString())[0]

      const date = new Date(temp.datetime);
      const options = {
        day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Bangkok'
      };
      const formattedDate = date.toLocaleString('en-GB', options);
      const defineLocation = temp.informant.includes('camera') ? defindInfo(temp.informant): null

      const tempRecord = [{
        key: temp.id,
        informant: temp.informant,
        location: defineLocation !== null ? defineLocation : `${temp.location_lat} / ${temp.location_long}`,
        dateTime: `${formattedDate}`,
        point: {lat: temp.location_lat, lng: temp.location_long},
        imgLink: temp.img_link ? temp.img_link : null
      }]
      setNotification(tempRecord[0])
    } catch (e) {
      console.log(e)
    }
  }

  const defindInfo = (camName) => {
    const camera = cameraInfo.filter((cam) => cam.camera_id === camName)
    return `${camera[0].location_lat}/${camera[0].location_long}`
  }

  useEffect(() => {
    fetchCamera().then(r => null)
  }, [location.param])

  useEffect(() => {
    fetchRecords().then(r => '')
  }, [cameraInfo])

  return (<div className="page-bg h-full w-full">
        <Navbar name={'DETAIL'}/>
        <div className="row px-2 pt-12">
          <div className=" col-6">
            <div className="card h-70">
              {<DetailMaps position={notification.point}/>}
            </div>
          </div>
          <div className="col-6 w-full">
            {notification.imgLink !== null ? <>
              <div className="row">
                <div className="card col-12">
                  <div className="card__header my-2 px-2">
                    <h6>Image</h6>
                  </div>
                  <div className="card__body my-2 px-1">
                    <img src={notification.imgLink} className="w-full h-82"/>
                  </div>
                </div>
              </div>
              <div className="row flex justify-between">
                <div className="card col-3">
                  <div className="card__header my-2 px-2">
                    <h6>Informants</h6>
                  </div>
                  <div className="card__body my-2 px-1">
                  <span>{notification.informant}
                  </span>
                  </div>
                </div>
                <div className="card col-4 mx-1">
                  <div className="card__header px-2 my-2">
                    <h6>Location</h6>
                  </div>
                  <div className="card__body my-2 px-1">
                    <span>{notification.location}</span>
                  </div>
                </div>
                <div className="card col-4">
                  <div className="card__header my-2 px-2">
                    <h6>Date Time</h6>
                  </div>
                  <div className="card__body my-2 px-2">
                    <span>{notification.dateTime}</span>
                  </div>
                </div>
              </div>
            </> : <>
              <div className="card col-12">
                <div className="card__header my-2 px-2">
                  <h6>Informants</h6>
                </div>
                <div className="card__body my-2 px-1">
                  <span>{notification.informant}
                  </span>
                </div>
              </div>
              <div className="card col-12">
                <div className="card__header my-2 px-2">
                  <h6>Location</h6>
                </div>
                <div className="card__body my-2 px-1">
                  <span>{notification.location}
                  </span>
                </div>
              </div>
              <div className="card col-12">
                <div className="card__header my-2 px-2">
                  <h6><h6>Date Time</h6></h6>
                </div>
                <div className="card__body my-2 px-1">
                  <span>{notification.dateTime}
                  </span>
                </div>
              </div>
            </>}
          </div>
        </div>
      </div>

      // notification.length > 0 ? (
      // isLoading ? (
      // <div className="Detail page-bg">
      //   <Navbar/>
      //   <div className="hero fullscreen">
      //     <div className="hero-body">
      //       <div className="content mt-4">
      //         <h4 className="px-4 text-center">Detail</h4>
      //         <div className="row px-2 w-full">
      //           <div className=" col-5">
      //             <div className="card h-70">
      //               {<DetailMaps position={notification.point}/>}
      //             </div>
      //           </div>
      //           <div className="col-5 w-full">
      //             <div className="row">
      //               <img src={notification.imgLink}/>
      //
      //             </div>
      //             <div className="row flex">
      //               <div className="card col-6">
      //                 <div className="card__header px-2">
      //                   <h6>Informants</h6>
      //                 </div>
      //                 <div className="card__body my-2 px-1">
      //                   <span>{notification.informant}
      //                   </span>
      //                 </div>
      //               </div>
      //               <div className="card col-6 ml-1">
      //                 <div className="card__header px-2">
      //                   <h6>Location</h6>
      //                 </div>
      //                 <div className="card__body my-2 px-1">
      //                   <span>{notification.location}</span>
      //                 </div>
      //               </div>
      //             </div>
      //             <div className="row">
      //               <div className="card col-12">
      //                 <div className="card__header px-2">
      //                   <h6>Date Time</h6>
      //                 </div>
      //                 <div className="card__body my-2 px-2">
      //                   <span>{notification.dateTime}
      //                   </span>
      //                 </div>
      //               </div>
      //             </div>
      //             <div className="row" onClick={() => history.goBack()}>
      //               {/*<Link to="/">*/}
      //               <Button className="h-14 col-12"><p className="my-2">BACK</p></Button>
      //               {/*</Link>*/}
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      // ) : null
  );
}

export default Detail;