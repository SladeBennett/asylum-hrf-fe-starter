import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import testData from '../data/test_data.json';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const AppContext = createContext({});

const useAppContextProvider = () => {
  const [graphData, setGraphData] = useState(testData);
  const [isDataLoading, setIsDataLoading] = useState(false);

  useLocalStorage({ graphData, setGraphData });

  const getFiscalData = async () => {
    let fiscalDataRes;
    try {
      fiscalDataRes = await axios
        .get('https://hrf-asylum-be-b.herokuapp.com/cases/fiscalSummary')
      return (fiscalDataRes.data);
    } catch (err) {
      setIsDataLoading(false);
      console.log('ERROR: ', err);
    }
  };

  const getCitizenshipResults = async () => {
    let citizenshipRes;
    try {
      citizenshipRes = await axios
        .get('https://hrf-asylum-be-b.herokuapp.com/cases/citizenshipSummary')
      return (citizenshipRes.data);
    } catch (err) {
      setIsDataLoading(false);
      console.log("ERROR: ", err);
    }
  };

  const updateQuery = async () => {
    setIsDataLoading(true);
  };

  const fetchData = async () => {
    let cit = await getCitizenshipResults();
    let fisc = await getFiscalData();
    fisc.citizenshipResults = cit;
    setGraphData(fisc);
    setIsDataLoading(false);
  };

  const clearQuery = () => {
    setGraphData({});
  };

  const getYears = () => graphData?.yearResults?.map(({ fiscal_year }) => Number(fiscal_year)) ?? [];

  useEffect(() => {
    if (isDataLoading) {
      fetchData();
    }
  }, [isDataLoading]);

  return {
    graphData,
    setGraphData,
    isDataLoading,
    updateQuery,
    clearQuery,
    getYears,
  };
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
