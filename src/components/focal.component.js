import React from "react";

function FocalDetails({
  name,
  hospital_type,
  address,
  phone_no,
  focalperson = {},
}) {
  return (
    <div className="d-flex justify-content-between pb-3">
      <div className="d-flex flex-column justify-content-end ">
        <p>
          <span className="h4">{name} </span>
        </p>
        <span>Hospital type - {hospital_type} </span>
        <p className="m-0">{phone_no}</p>
        <p className="m-0">{address}</p>
      </div>
      <div className="col d-flex flex-column justify-content-end align-items-end ">
        <p className="m-0">{focalperson.name}</p>
        <p className="m-0">{focalperson.phone}</p>
        <p className="m-0">{focalperson.email}</p>
      </div>
    </div>
  );
}

export default FocalDetails;
