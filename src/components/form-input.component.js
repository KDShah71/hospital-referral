import React from "react";

const FormInput = ({
  label,
  type,
  defaultValue,
  register,
  required,
  errors,
}) => {
  if (label === "id" || label === "updated_at") return null;

  return (
    <div className="mb-3">
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <input
        defaultValue={defaultValue}
        type={type}
        {...register(label, { ...required })}
        className="form-control"
        id={label}
      />
      {errors[label]?.type === "required" && `${label} is required`}
    </div>
  );
};

export default FormInput;
