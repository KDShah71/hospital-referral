import React, { useContext } from "react";
import AlertComponent from "../../components/alert.component";

import DetailsCard from "../../components/card.component";
import { HospitalContext } from "../../services/hospital/hospital.context";

function HospitalDetailsScreen() {
  const { hospital, error } = useContext(HospitalContext);

  const {
    normal,
    discharge,
    death,
    icu,
    ventilators,
    oxygen_plant,
    hdu,
    focalperson,
  } = hospital;

  return (
    <div className="row row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 g-lg-3">
      <DetailsCard title="Icu" to="icus" data={icu} />
      <DetailsCard title="Ventilators" to="ventilators" data={ventilators} />
      <DetailsCard title="Oxygen Plant" to="oxygen" data={oxygen_plant} />
      <DetailsCard title="Normal" to="normal" data={normal} />
      <DetailsCard title="HDU" to="hdu" data={hdu} />
      <DetailsCard title="Focal Person" to="focal" data={focalperson} />
      <DetailsCard title="Discharge" to="discharge" data={discharge} />
      <DetailsCard title="Death" to="death" data={death} />
      {error && <AlertComponent error={error} />}
    </div>
  );
}

export default HospitalDetailsScreen;
