import React, { useState } from 'react';
import { useContext } from 'react';

const Context = React.createContext();

const ActiveCurrentPageStore = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const handleUpdateCurrengPage = (pageNum) => {
    setCurrentPage(pageNum);
  };
  return (
    <Context.Provider value={{ currentPage, handleUpdateCurrengPage }}>
      {props.children}
    </Context.Provider>
  );
};

const ActiveCurrentPageContext = () => {
  const { currentPage, handleUpdateCurrengPage } = useContext(Context);
  return { currentPage, handleUpdateCurrengPage };
};

export { ActiveCurrentPageStore, ActiveCurrentPageContext };
