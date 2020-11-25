import React from 'react';
import { PagesProvider } from '../../stores/pages';

export const Home = () => {
  return (
    <PagesProvider>
      <div>Home</div>
    </PagesProvider>
  );
};
