import React, { useContext, useEffect } from "react";
// import Sidebar from "../../components/sidebar.component";
import { HospitalContext } from "../../services/hospital/hospital.context";
import logo from "./hospital_referral_logo.png";

function Dashboard({ children }) {
  const {
    // hospital,
    onGetHospital,
  } = useContext(HospitalContext);

  useEffect(() => {
    onGetHospital();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const {
  //   name = "name",
  //   address = "address",
  //   hospital_type = "type",
  //   phone_no = "number",
  // } = hospital;

  return (
    <div className="container-fluid ">
      {/* <Sidebar /> */}
      <div
        style={{
          height: "100vh",
          // paddingLeft: "200px",
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

              {/* <h5>{name}</h5>
              <span>{address}</span> */}
            </div>

            {/* <div className="col d-flex flex-column align-items-end ">
               <p className="m-0">{hospital_type}</p>
              <p className="m-0">{phone_no}</p>
              <p className="my-2 p-14 text-black-50">
                Hospital Referral System - by Lumbini Hospitals
              </p> 
            </div> */}
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
