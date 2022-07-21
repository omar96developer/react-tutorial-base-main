import { useState, useContext, createContext } from "react";
import useFetch from "./useFetch";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setSidebar] = useState(false);
  const [query, setQuery] = useState("negroni");
  const [scrollPosition, setScrollPosition] = useState(0);
  const { isLoading, data, isError, count } = useFetch(`s=${query}`);
  const openSidebar = () => {
    setSidebar(true);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };
  const searchCocktail = (input) => {
    setQuery(input);
  };
  const getScrollPosition = (value) => {
    setScrollPosition(value)
  }
  const deleteScrollPosition = (value) => {
    setScrollPosition(0)
  }

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        query,
        isLoading,
        data,
        isError,
        count,
        searchCocktail,
        scrollPosition,
        setScrollPosition,
        getScrollPosition,
        deleteScrollPosition
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
