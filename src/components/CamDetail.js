import 'cirrus-ui';
import React from "react";

import Navbar from "./Navbar";

function LineDetail() {
  return (
      <div className="Create">
        <Navbar/>
        <div className="hero fullscreen">
          <div className="hero-body">
            <div className="content">
              <div className="card">
                <div className="card__header">
                  <h5 className="px-4"> Create New Notification</h5>
                </div>
                <div className="row px-2">
                  <div className=" col-3">
                    <div className="card my-1">
                      <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
                          width="600"
                          height="650"
                          style={{border: "0"}}
                          allowFullScreen=""
                          loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                  <div className="col-9">
                    <div className="row">
                      <div className="card col-12">
                        <div className="card__header px-2">
                          <h6>Location</h6>
                        </div>
                        <div className="card__body my-2 px-2">
                          <span>Apple park </span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="card col-6">
                        <div className="card__header px-2">
                          <h6>Description</h6>
                        </div>
                        <div className="card__body my-2 px-2">
                          <span>Notification description will show here if have</span>
                        </div>
                      </div>
                      <div className="card col-6">
                        <div className="card__header px-2">
                          <h6>Image</h6>
                        </div>
                        <div className="card__body my-2 px-2">
                          <span>Image from cam will show here</span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="btn" >
                          <a href="/">Back</a>
                        </div>
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
}

export default LineDetail;