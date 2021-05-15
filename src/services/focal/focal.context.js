import React, { useState, createContext } from "react";

import { axiosInstance } from "../../infrastructure/helpers/axios.helper";

export const FocalContext = createContext();

export const FocalContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [focals, setFocals] = useState({});
  const [error, setError] = useState(null);

  const onGetFocals = async (id) => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(`/core/focalperson/${id}/`);

      setFocals(response.data);
      setError(null);
    } catch (e) {
      console.log(e);
      setError(e.toString());
    } finally {
      setIsLoading(false);
    }
  };

  const onPutFocals = async (data, id) => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.put(
        `/core/focalperson/${id}/`,
        data
      );

      setFocals(response.data);
      return;
    } catch (e) {
      console.log(e);
      setError(e.toString());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FocalContext.Provider
      value={{
        isLoading,
        error,
        focals,
        onGetFocals,
        onPutFocals,
      }}
    >
      {children}
    </FocalContext.Provider>
  );
};
