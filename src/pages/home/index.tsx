import React, { useContext } from 'react';
import { PagesContext, PagesProvider } from '../../stores/pages';

export const Home = () => {
  const pages = useContext(PagesContext);
  debugger;
  return <div>Home</div>;
};
