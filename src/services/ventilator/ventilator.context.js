import React, { useState, createContext } from "react";

import { axiosInstance } from "../../infrastructure/helpers/axios.helper";

export const VentilatorContext = createContext();

export const VentilatorContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [ventilators, setVentilators] = useState({});
  const [error, setError] = useState(null);

  const onGetVentilators = async (id) => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(`/core/ventailators/${id}/`);

      setVentilators(response.data);
      setError(null);
    } catch (e) {
      console.log(e);
      setError(e.toString());
    } finally {
      setIsLoading(false);
    }
  };

  const onPutVentilators = async (data, id) => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.put(
        `/core/ventailators/${id}/`,
        data
      );

      setVentilators(response.data);
      setError(null);
    } catch (e) {
      console.log(e);
      setError(e.toString());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <VentilatorContext.Provider
      value={{
        isLoading,
        error,
        ventilators,
        onGetVentilators,
        onPutVentilators,
      }}
    >
      {children}
    </VentilatorContext.Provider>
  );
};
