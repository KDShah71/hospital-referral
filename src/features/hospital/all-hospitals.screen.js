import React, { useContext, useEffect } from "react";
import AlertComponent from "../../components/alert.component";
import Loader from "../../components/loader.component";

import { AllHospitalsContext } from "../../services/hospital/all-hospitals.contex";
import HospitalsBody from "./body-all-hospitals";

function AllHospitalsScreen() {
  const { isLoading, error, hospitals, onGetHospitals } =
    useContext(AllHospitalsContext);

  useEffect(() => {
    onGetHospitals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <Loader />;
  if (error) return <AlertComponent error={error} />;
  if (Object.keys(hospitals).length !== 0) {
    return <HospitalsBody hospitals={hospitals} />;
  } else {
    return <h3>No hospitals found</h3>;
  }
}

export default AllHospitalsScreen;
