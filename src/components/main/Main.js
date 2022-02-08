import React from "react";
import Calendar from "../calendar/Calendar";
import Sidebar from "../siderbar/Sidebar";

import "./Main.css";

function Main() {
  return (
    <>
      <div className="container-fluid box-content">
        <div className="row">
          <div className="col-12">
            <div className="card ">
              <div className="card-body">
                <div className="row">
                  <Sidebar />
                  <Calendar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
