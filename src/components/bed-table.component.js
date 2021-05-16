import React from "react";
import Moment from "react-moment";

const BedsTable = ({ coas }) => (
  <div className="table-responsive ">
    <table className="table table-hover table-borderless">
      <thead>
        <tr>
          <th scope="col">Beds</th>
          <th className="text-center" scope="col">
            Capacity
          </th>
          <th className="text-center" scope="col">
            Occupied
          </th>
          <th className="text-center" scope="col">
            Available
          </th>
          <th className="text-center" scope="col">
            Verified
          </th>
        </tr>
      </thead>
      <tbody>
        {coas.map((coa, index) => {
          const {
            name,
            data: { capacity, occupied, available, updated_at },
          } = coa;
          return (
            <tr key={index}>
              <th scope="row">{name}</th>
              <td className="text-center">{capacity}</td>
              <td className="text-center">{occupied}</td>
              <td className="text-center">{available}</td>
              <td className="text-center text-muted">
                <Moment fromNow>{updated_at}</Moment>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default BedsTable;
