import React, { useState, FunctionComponent } from 'react';
import { NavBar } from './components/navBar';
import { NavDrawer } from './components/navDrawer';

export const Navigation: FunctionComponent = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <NavBar toggleDrawer={toggleDrawer} />
      <NavDrawer toggleDrawer={toggleDrawer} open={open} />
    </>
  );
};
