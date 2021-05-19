import React, { useContext, useEffect } from "react";
import AlertComponent from "../../components/alert.component";
import BedsTable from "../../components/bed-table.component";

import DetailsCard from "../../components/card.component";
import FocalDetails from "../../components/focal.component";
import Loader from "../../components/loader.component";
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
      name: "ICU",
      data: icu,
    },
    {
      name: "Normal",
      data: normal,
    },
    {
      name: "HDU",
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

  if (isLoading) return <Loader />;

  if (Object.keys(hospitalInfo).length === 0) return null;

  return (
    <div style={{ paddingBottom: "100px" }}>
      <div className="mb-4 mx-1 ">
        <FocalDetails
          name={name}
          address={address}
          phone_no={phone_no}
          hospital_type={hospital_type}
          focalperson={focalperson}
        />
        <hr />
      </div>

      <div>
        <div className="card my-5  bg-white p-3 shadow-sm ">
          <BedsTable coas={COAs} />
        </div>

        <hr />

        <div className="row my-5 row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3">
          <DetailsCard title="Discharge" data={discharge} />
          <DetailsCard title="Death" data={death} />

          {error && <AlertComponent error={error} />}
        </div>
      </div>
    </div>
  );
}

export default HospitalInfoScreen;
