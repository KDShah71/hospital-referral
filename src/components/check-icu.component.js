import React from "react";

const CheckIcu = ({ icu, state }) => {
  return (
    <div className="d-flex flex-column justify-content-start">
      <p className="d-flex align-self-end text-black-50 m-0 p-14 py-1">ICU</p>
      <span class={`px-3 py-1 badge  ${state ? "bg-success" : "bg-danger"} `}>
        {state ? "Available" : "Full"}
      </span>

      {icu && (
        <div className="d-flex flex-column align-self-end">
          <p class="text-black-50 m-0 pt-2 d-flex justify-content-end p-14">
            {icu.updated_at.slice(11, 19)}
          </p>
          <p class="text-black-50 m-0 d-flex  justify-content-end p-14">
            {icu.updated_at.slice(0, 10)}
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckIcu;
