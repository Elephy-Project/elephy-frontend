import 'cirrus-ui';
import React from "react";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
      <div className="Dashboard page-bg ">
        <Navbar/>
        <div className="hero fullscreen">
          <div className="hero-body">
            <div className="row">
              <div className="col-3 u-items-center py-10">
                <div className="btn col-12 ">
                  <a href="/cam-inbox"> Camera Notification </a>
                </div>
                <div className="btn col-12 ">
                  <a href="/line-inbox"> Line Notification </a>
                </div>
                <div className="btn col-12 ">
                  <a href="/create"> Create </a>
                </div>
              </div>
              <div className="col-9">
                <div className="row">
                  <div className="card col-12 ">
                    <div className="card__header">
                      <h3 className="title my-2 px-2">Emergency Header</h3>
                    </div>
                    <div className="card__container">
                      <div className="card__body pt-3 px-2">
                        <table className="table striped col-12">
                          <thead>
                          <tr>
                            <th className="col-1"><abbr title="Title1">No.</abbr></th>
                            <th className="col-5"><abbr title="Title2">Title</abbr></th>
                            <th className="col-5"><abbr title="Title2">Location</abbr></th>
                            <th className="col-1"><abbr title="Title3">Status</abbr></th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <th>1</th>
                            <td>Row:1 Cell:1</td>
                            <td>Location 1</td>
                            <td>Check</td>
                          </tr>
                          <tr>
                            <th>2</th>
                            <td>Row:2 Cell:1</td>
                            <td>Location 2</td>
                            <td>Check</td>
                          </tr>
                          <tr>
                            <th>3</th>
                            <td>Row:3 Cell:1</td>
                            <td>Location 3</td>
                            <td>Check</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
      ;
};

export default Dashboard;