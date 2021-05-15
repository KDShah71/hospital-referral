import React from "react";

const BedsTable = ({ coas }) => (
  <div className="table-responsive ">
    <table className="table table-hover table-borderless">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th className="text-center" scope="col">
            Capacity
          </th>
          <th className="text-center" scope="col">
            Occupied
          </th>
          <th className="text-center" scope="col">
            Available
          </th>
        </tr>
      </thead>
      <tbody>
        {coas.map((coa, index) => {
          const {
            name,
            data: { capacity, occupied, available },
          } = coa;
          return (
            <tr key={index}>
              <th scope="row">{name}</th>
              <td className="text-center">{capacity}</td>
              <td className="text-center">{occupied}</td>
              <td className="text-center">{available}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default BedsTable;
