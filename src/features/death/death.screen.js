import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router";
import AlertComponent from "../../components/alert.component";
import DetailsCard from "../../components/card.component";
import FormInput from "../../components/form-input.component";
import { DeathContext } from "../../services/death/death.context";
import { HospitalContext } from "../../services/hospital/hospital.context";

function DeathScreen() {
  const { isLoading, error, deaths, onGetDeaths, onPutDeaths } =
    useContext(DeathContext);

  const { onGetHospital } = useContext(HospitalContext);

  const location = useLocation();
  const id = location.state.id;

  const onSubmit = (data) => {
    onPutDeaths(data, id).then(() => {
      onGetHospital();
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    onGetDeaths(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row g-4">
      <div className="col-md-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          {Object.keys(deaths).map((key, index) => (
            <FormInput
              key={index}
              type="number"
              defaultValue={deaths[key]}
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
        <DetailsCard data={deaths} title={"Death"} />
      </div>
      {error && <AlertComponent error={error} />}
    </div>
  );
}

export default DeathScreen;
