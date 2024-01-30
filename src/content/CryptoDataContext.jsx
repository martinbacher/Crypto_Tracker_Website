import React, { createContext, useContext, useEffect, useState } from "react";
import fetchData from "../components/CryptoDataFetch";

const CryptoDataContext = createContext();

export const CryptoDataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiUrl = "https://openapiv1.coinstats.app/coins?limit=200";

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const res = await fetchData(apiUrl);
        setData(res);
      } catch (err) {
        console.log("Error fetching data: ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAndSetState();
  }, [apiUrl]);

  console.log("Data", data);

  return (
    <CryptoDataContext.Provider value={{ data, loading }}>
      {children}
    </CryptoDataContext.Provider>
  );
};

export const useCryptoDataContext = () => {
  return useContext(CryptoDataContext);
};
