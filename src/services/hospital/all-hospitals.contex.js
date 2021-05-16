import React, { useState, createContext } from "react";

import { axiosInstance } from "../../infrastructure/helpers/axios.helper";

export const AllHospitalsContext = createContext();

export const AllHospitalsContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hospitals, sethospitals] = useState({});
  const [error, setError] = useState(null);

  const onGetHospitals = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get("core/hospital/");
      sethospitals(response.data);
      setError(null);
    } catch (e) {
      console.log(e);
      setError(e.toString());
    } finally {
      setIsLoading(false);
    }
  };

  const onSearchHospitals = async (searchText) => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(
        `core/hospital/?search=${searchText}`
      );
      sethospitals(response.data);
      setError(null);
    } catch (e) {
      console.log(e);
      setError(e.toString());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AllHospitalsContext.Provider
      value={{
        isLoading,
        error,
        hospitals,
        onGetHospitals,
        onSearchHospitals,
      }}
    >
      {children}
    </AllHospitalsContext.Provider>
  );
};
