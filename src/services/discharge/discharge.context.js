import React, { useState, createContext } from "react";

import { axiosInstance } from "../../infrastructure/helpers/axios.helper";

export const DischargeContext = createContext();

export const DischargeContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [discharges, setDischarges] = useState({});
  const [error, setError] = useState(null);

  const onGetDischarges = async (id) => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(`/core/discharge/${id}/`);

      setDischarges(response.data);
      setError(null);
    } catch (e) {
      console.log(e);
      setError(e.toString());
    } finally {
      setIsLoading(false);
    }
  };

  const onPutDischarges = async (data, id) => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.put(`/core/discharge/${id}/`, data);

      setDischarges(response.data);
      setError(null);
    } catch (e) {
      console.log(e);
      setError(e.toString());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DischargeContext.Provider
      value={{
        isLoading,
        error,
        discharges,
        onGetDischarges,
        onPutDischarges,
      }}
    >
      {children}
    </DischargeContext.Provider>
  );
};
