import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import AlertComponent from "../../components/alert.component";
import DetailsCard from "../../components/card.component";
import FormInput from "../../components/form-input.component";
import { HospitalContext } from "../../services/hospital/hospital.context";
import { OxygenContext } from "../../services/oxygen/oxygen.context";

function OxygenScreen() {
  const { isLoading, error, oxygens, onGetOxygens, onPutOxygens } =
    useContext(OxygenContext);

  const { onGetHospital } = useContext(HospitalContext);

  const location = useLocation();
  const id = location.state.id;

  const onSubmit = (data) => {
    onPutOxygens(data, id).then(() => {
      onGetHospital();
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    onGetOxygens(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row g-4">
      <div className="col-md-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          {Object.keys(oxygens).map((key, index) => (
            <FormInput
              key={index}
              defaultValue={oxygens[key]}
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
        <DetailsCard data={oxygens} title={"Oxygen"} />
      </div>
      {error && <AlertComponent error={error} />}
    </div>
  );
}

export default OxygenScreen;
