import React, { useState, createContext } from "react";

import { axiosInstance } from "../../infrastructure/helpers/axios.helper";

export const HduContext = createContext();

export const HduContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hdus, setHdus] = useState({});
  const [error, setError] = useState(null);

  const onGetHdus = async (id) => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(`/core/hdubeds/${id}/`);

      setHdus(response.data);
      setError(null);
    } catch (e) {
      console.log(e);
      setError(e.toString());
    } finally {
      setIsLoading(false);
    }
  };

  const onPutHdus = async (data, id) => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.put(`/core/hdubeds/${id}/`, data);

      setHdus(response.data);
      return;
    } catch (e) {
      console.log(e);
      setError(e.toString());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <HduContext.Provider
      value={{
        isLoading,
        error,
        hdus,
        onGetHdus,
        onPutHdus,
      }}
    >
      {children}
    </HduContext.Provider>
  );
};
