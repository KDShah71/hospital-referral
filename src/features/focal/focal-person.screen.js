import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router";
import AlertComponent from "../../components/alert.component";
import DetailsCard from "../../components/card.component";
import FormInput from "../../components/form-input.component";
import { FocalContext } from "../../services/focal/focal.context";
import { HospitalContext } from "../../services/hospital/hospital.context";

const typeReturn = (key) => {
  switch (key) {
    case "name":
      return "text";
    case "email":
      return "email";
    default:
      return "number";
  }
};

function FocalPersonScreen() {
  const { isLoading, error, focals, onGetFocals, onPutFocals } =
    useContext(FocalContext);

  const { onGetHospital } = useContext(HospitalContext);

  const location = useLocation();
  const id = location.state.id;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    onPutFocals(data, id).then(() => {
      onGetHospital();
    });
  };

  useEffect(() => {
    onGetFocals(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row g-4">
      <div className="col-md-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          {Object.keys(focals).map((key, index) => {
            return (
              <FormInput
                key={index}
                defaultValue={focals[key]}
                type={typeReturn(key)}
                label={key}
                register={register}
                errors={errors}
              />
            );
          })}

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
        <DetailsCard data={focals} title={"Focal Person"} />
      </div>
      {error && <AlertComponent error={error} />}
    </div>
  );
}

export default FocalPersonScreen;
