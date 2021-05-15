import React, { useState, createContext } from "react";

import {
  axiosInstance,
  hospitalId,
} from "../../infrastructure/helpers/axios.helper";

export const HospitalContext = createContext();

export const HospitalContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hospital, sethospital] = useState({});
  const [hospitalInfo, setHospitalInfo] = useState({});
  const [error, setError] = useState(null);

  const onGetHospital = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(`/core/hospital/${hospitalId}/`);

      sethospital(response.data);
      setError(null);
    } catch (e) {
      console.log(e);
      setError(e.toString());
    } finally {
      setIsLoading(false);
    }
  };

  const onGetHospitalInfo = async (id) => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(`/core/hospital/${id}/`);

      setHospitalInfo(response.data);
      setError(null);
    } catch (e) {
      console.log(e);
      setError(e.toString());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <HospitalContext.Provider
      value={{
        isLoading,
        error,
        hospital,
        onGetHospital,
        hospitalInfo,
        onGetHospitalInfo,
      }}
    >
      {children}
    </HospitalContext.Provider>
  );
};
