import React, { useState, createContext } from "react";

import { axiosInstance } from "../../infrastructure/helpers/axios.helper";

export const OxygenContext = createContext();

export const OxygenContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [oxygens, setOxygens] = useState({});
  const [error, setError] = useState(null);

  const onGetOxygens = async (id) => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(`/core/oxygen/${id}/`);

      setOxygens(response.data);
      setError(null);
    } catch (e) {
      console.log(e);
      setError(e.toString());
    } finally {
      setIsLoading(false);
    }
  };

  const onPutOxygens = async (data, id) => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.put(`/core/oxygen/${id}/`, data);

      setOxygens(response.data);
      setError(null);
    } catch (e) {
      console.log(e);
      setError(e.toString());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <OxygenContext.Provider
      value={{
        isLoading,
        error,
        oxygens,
        onGetOxygens,
        onPutOxygens,
      }}
    >
      {children}
    </OxygenContext.Provider>
  );
};
