import React, { useState, createContext } from "react";

import { axiosInstance } from "../../infrastructure/helpers/axios.helper";

export const DeathContext = createContext();

export const DeathContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [deaths, setDeaths] = useState({});
  const [error, setError] = useState(null);

  const onGetDeaths = async (id) => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(`/core/death/${id}/`);

      setDeaths(response.data);
      setError(null);
    } catch (e) {
      console.log(e);
      setError(e.toString());
    } finally {
      setIsLoading(false);
    }
  };

  const onPutDeaths = async (data, id) => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.put(`/core/death/${id}/`, data);

      setDeaths(response.data);
      return;
    } catch (e) {
      console.log(e);
      setError(e.toString());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DeathContext.Provider
      value={{
        isLoading,
        error,
        deaths,
        onGetDeaths,
        onPutDeaths,
      }}
    >
      {children}
    </DeathContext.Provider>
  );
};
