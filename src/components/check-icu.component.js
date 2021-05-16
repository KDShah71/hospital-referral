import React from "react";
import Moment from "react-moment";

const CheckIcu = ({ icu, state }) => {
  const { updated_at } = icu;
  return (
    <div className="d-flex flex-column align-items-end">
      <div>
        <span className="p-12 text-black-50 me-2">ICU </span>
        <span
          className={`px-3  py-1 badge  ${state ? "bg-success" : "bg-danger"} `}
        >
          {state ? "Available" : "Full"}
        </span>
      </div>
      {icu && (
        <div className="text-black-50 m-0 pt-2 d-flex justify-content-start p-12">
          Verified* <span className="px-2">{" : "}</span>{" "}
          <Moment fromNow>{updated_at}</Moment>
        </div>
      )}
    </div>
  );
};

export default CheckIcu;
