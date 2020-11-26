import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { PagesContext } from '../../stores/pages';
import { Page } from '../page';

export const Pages = () => {
  const { pages } = useContext(PagesContext) || { pages: [] };
  const pageRoutes = pages.map((page) => {
    return (
      <Route key={page.id} path={`/page/${page.slug}`}>
        <Page title={page.title} content={page.content} />
      </Route>
    );
  });
  return <>{pageRoutes}</>;
};
