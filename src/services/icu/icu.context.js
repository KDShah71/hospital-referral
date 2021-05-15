import React, { useState, createContext } from "react";

import { axiosInstance } from "../../infrastructure/helpers/axios.helper";

export const IcuContext = createContext();

export const IcuContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [icus, setIcus] = useState({});
  const [error, setError] = useState(null);

  const onGetIcus = async (id) => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(`/core/icubeds/${id}/`);

      setIcus(response.data);
      setError(null);
    } catch (e) {
      console.log(e);
      setError(e.toString());
    } finally {
      setIsLoading(false);
    }
  };

  const onPutIcus = async (data, id) => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.put(`/core/icubeds/${id}/`, data);

      setIcus(response.data);
      setError(null);
    } catch (e) {
      console.log(e);
      setError(e.toString());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <IcuContext.Provider
      value={{
        isLoading,
        error,
        icus,
        onGetIcus,
        onPutIcus,
      }}
    >
      {children}
    </IcuContext.Provider>
  );
};
