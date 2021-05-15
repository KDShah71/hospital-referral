import React, { useContext, useEffect } from "react";
import Sidebar from "../../components/sidebar.component";
import { HospitalContext } from "../../services/hospital/hospital.context";

function Dashboard({ children }) {
  const { hospital, onGetHospital } = useContext(HospitalContext);

  useEffect(() => {
    onGetHospital();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    name = "name",
    address = "address",
    hospital_type = "type",
    phone_no = "number",
  } = hospital;

  return (
    <div className="container-fluid ">
      <Sidebar />
      <div
        style={{
          height: "100vh",
          paddingLeft: "200px",
        }}
      >
        <div className="container row mb-3  ">
          <div className=" d-flex justify-content-between py-3 ">
            <div className="col">
              <h5>{name}</h5>
              <span>{address}</span>
            </div>

            <div className="col d-flex flex-column align-items-end ">
              <p className="m-0">{hospital_type}</p>
              <p className="m-0">{phone_no}</p>
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
