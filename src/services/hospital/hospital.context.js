import React, { useState, createContext } from "react";

import { axiosInstance } from "../../infrastructure/helpers/axios.helper";

export const HospitalContext = createContext();

export const HospitalContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [hospitalInfo, setHospitalInfo] = useState({});
  const [error, setError] = useState(null);

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

        hospitalInfo,
        onGetHospitalInfo,
      }}
    >
      {children}
    </HospitalContext.Provider>
  );
};
