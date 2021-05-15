import React, { useState, createContext } from "react";

import { axiosInstance } from "../../infrastructure/helpers/axios.helper";

export const NormalContext = createContext();

export const NormalContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [normals, setNormals] = useState({});
  const [error, setError] = useState(null);

  const onGetNormals = async (id) => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(`/core/normalbeds/${id}/`);

      setNormals(response.data);
      setError(null);
    } catch (e) {
      console.log(e);
      setError(e.toString());
    } finally {
      setIsLoading(false);
    }
  };

  const onPutNormals = async (data, id) => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.put(`/core/normalbeds/${id}/`, data);

      setNormals(response.data);
      setError(null);
    } catch (e) {
      console.log(e);
      setError(e.toString());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <NormalContext.Provider
      value={{
        isLoading,
        error,
        normals,
        onGetNormals,
        onPutNormals,
      }}
    >
      {children}
    </NormalContext.Provider>
  );
};
