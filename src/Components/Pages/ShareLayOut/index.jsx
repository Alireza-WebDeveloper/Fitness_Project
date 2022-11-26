import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Header';

const ShareLayOut = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default ShareLayOut;
