import 'cirrus-ui';
import React from "react";

import Navbar from "./Navbar";

function Summary() {
  return (
      <div className="Create">
        <Navbar/>
        <div className="hero">
          <div className="hero-body">
            <div className="content">
              <div className="row ">
                <div className="col-12 u-text-right">
                  <select className="form-group-input w-10p px-2 mt-2 my-1" placeholder="Choose one">
                    <option value="">Month</option>
                    <option value="option-1">January</option>
                    <option value="option-2">February</option>
                    <option value="option-3">March</option>
                    <option value="option-1">April</option>
                    <option value="option-2">May</option>
                    <option value="option-3">June</option>
                    <option value="option-1">July</option>
                    <option value="option-2">August</option>
                    <option value="option-3">September</option>
                    <option value="option-1">October</option>
                    <option value="option-2">November</option>
                    <option value="option-3">December</option>
                  </select>
                  <select className="form-group-input w-10p px-2 mx-1" placeholder="Choose one">
                    <option value="">Year</option>
                    <option value="option-1">2022</option>
                    <option value="option-2">2021</option>
                    <option value="option-3">2020</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-7 my-2">
                  <h6>Location Summary</h6>
                </div>
                <div className="col-5 my-2 u-text-right">
                  <h6>Summary detail</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-7 my-3">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
                      width="700"
                      height="750"
                      style={{border: "0"}}
                      allowFullScreen=""
                      loading="lazy"
                  ></iframe>
                </div>
                <div className="col-5">
                  <table className="table striped col-12">
                    <thead>
                    <tr>
                      <th className="col-1"><abbr title="Title1">No.</abbr></th>
                      <th className="col-5"><abbr title="Title2">Title</abbr></th>
                      <th className="col-5"><abbr title="Title2">Location</abbr></th>
                      <th className="col-1"><abbr title="Title3">Time</abbr></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <th>1</th>
                      <td>Row:1 Cell:1</td>
                      <td>Location 1</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <th>2</th>
                      <td>Row:2 Cell:1</td>
                      <td>Location 2</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <th>3</th>
                      <td>Row:3 Cell:1</td>
                      <td>Location 3</td>
                      <td>2</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
      ;
}

export default Summary;