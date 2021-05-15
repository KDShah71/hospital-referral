import React, { useContext, useEffect } from "react";
import AlertComponent from "../../components/alert.component";
import HospitalCard from "../../components/hospital-card.component";
import { AllHospitalsContext } from "../../services/hospital/all-hospitals.contex";

function AllHospitalsScreen() {
  const { isLoading, error, hospitals, onGetHospitals } =
    useContext(AllHospitalsContext);

  useEffect(() => {
    onGetHospitals();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <h2>loading...</h2>;

  if (error) return <AlertComponent error={error} />;

  if (Object.keys(hospitals).length === 0) return null;

  return (
    <div className="row row row-cols-1   row-cols-sm-2  row-cols-md-3 row-cols-lg-4 g-2 g-lg-3">
      {hospitals.results.map((result, index) => {
        const { name, address, phone_no, images, hospital_type, id, icu } =
          result;
        return (
          <HospitalCard
            key={index}
            address={address}
            name={name}
            hospital_type={hospital_type}
            images={images}
            to={id}
            icu={icu}
            phone={phone_no}
          />
        );
      })}
    </div>
  );
}

export default AllHospitalsScreen;
