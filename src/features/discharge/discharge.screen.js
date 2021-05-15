import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router";
import AlertComponent from "../../components/alert.component";
import DetailsCard from "../../components/card.component";
import FormInput from "../../components/form-input.component";
import { DischargeContext } from "../../services/discharge/discharge.context";
import { HospitalContext } from "../../services/hospital/hospital.context";

function DischargeScreen() {
  const { isLoading, error, discharges, onGetDischarges, onPutDischarges } =
    useContext(DischargeContext);

  const { onGetHospital } = useContext(HospitalContext);

  const location = useLocation();
  const id = location.state.id;

  const onSubmit = (data) => {
    onPutDischarges(data, id).then(() => {
      onGetHospital();
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    onGetDischarges(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row g-4">
      <div className="col-md-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          {Object.keys(discharges).map((key, index) => (
            <FormInput
              key={index}
              defaultValue={discharges[key]}
              type="number"
              label={key}
              register={register}
              errors={errors}
            />
          ))}

          <div className="mb-3 d-flex align-items-end">
            <button
              disabled={isLoading}
              type="submit"
              className="btn btn-dark ms-auto"
            >
              Update
            </button>
          </div>
        </form>
      </div>
      <div className="col-md-6">
        <DetailsCard data={discharges} title={"Discharges"} />
      </div>
      {error && <AlertComponent error={error} />}
    </div>
  );
}

export default DischargeScreen;
