import React from "react";

import logo from "../../components/assests/hospital_referral_logo.png";

function Dashboard({ children }) {
  return (
    <div className="container-fluid ">
      <div
        style={{
          height: "100vh",
        }}
      >
        <div className="container  mb-5  ">
          <div className="d-flex justify-content-start  ">
            <div className="">
              <a href="/" className="px-3">
                <img src={logo} alt="hospital referral logo" width="110" />
              </a>
            </div>
            <div className="d-flex align-items-center ">
              <div className="d-flex flex-column px-4">
                <h3>Hospital Referral System </h3>
                <span> By Lumbini Hospitals</span>
              </div>
            </div>
          </div>
          <hr />
        </div>

        <div className="container">
          <div className="container-fluid mb-5">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
