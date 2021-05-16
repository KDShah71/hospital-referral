import React, { useContext, useEffect } from "react";
import AlertComponent from "../../components/alert.component";
import BedsTable from "../../components/bed-table.component";

import DetailsCard from "../../components/card.component";
import { HospitalContext } from "../../services/hospital/hospital.context";

function HospitalInfoScreen({ match }) {
  const { isLoading, hospitalInfo, error, onGetHospitalInfo } =
    useContext(HospitalContext);

  const id = match.params.id;

  useEffect(() => {
    onGetHospitalInfo(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const {
    name,
    address,
    phone_no,
    hospital_type,
    focalperson,
    death,
    discharge,
    normal,
    icu,
    ventilators,
    oxygen_plant,
    hdu,
  } = hospitalInfo;

  const COAs = [
    {
      name: "Icu",
      data: icu,
    },
    {
      name: "Normal",
      data: normal,
    },
    {
      name: "Hdu",
      data: hdu,
    },

    {
      name: "Ventilator",
      data: ventilators,
    },

    {
      name: "Oxygen",
      data: oxygen_plant,
    },
  ];

  if (isLoading) return <h2>loading...</h2>;

  if (Object.keys(hospitalInfo).length === 0) return null;

  return (
    <div style={{ paddingBottom: "100px" }}>
      <div className="mb-4 mx-1">
        <p className="d-flex justify-content-between">
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
        </p>
      </div>

      <div className="card  my-5 bg-light p-3 shadow-sm ">
        <BedsTable coas={COAs} />
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3">
        <DetailsCard title="Icu" data={icu} />
        <DetailsCard title="Ventilators" data={ventilators} />
        <DetailsCard title="Oxygen Plant" data={oxygen_plant} />
        <DetailsCard title="Normal" data={normal} />
        <DetailsCard title="HDU" data={hdu} />
        {/* <DetailsCard title="Focal Person" data={focalperson} /> */}
        <DetailsCard title="Discharge" data={discharge} />
        <DetailsCard title="Death" data={death} />
        {error && <AlertComponent error={error} />}
      </div>
    </div>
  );
}

export default HospitalInfoScreen;
