import React, { FunctionComponent, useContext } from 'react';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from 'react-router-dom';
import { navProps } from '../../types';
import { useStyles } from './style';
import { PagesContext } from '../../../../stores/pages';

type NavDrawerProps = navProps & {
  open: boolean;
};
export const NavDrawer: FunctionComponent<NavDrawerProps> = ({
  open,
  toggleDrawer,
}: NavDrawerProps) => {
  const history = useHistory();
  const classes = useStyles();
  const pageData = useContext(PagesContext) || { pages: [] };
  const handleOnClick = (route: string) => {
    history.push(route);
    toggleDrawer();
  };

  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer}>
      <ListItem
        button
        className={classes.buttons}
        onClick={() => handleOnClick('/home')}
      >
        <ListItemText primary="Home" />
      </ListItem>
      {pageData.pages.map(({ id, slug, title }) => {
        return (
          <ListItem
            key={id}
            button
            className={classes.buttons}
            onClick={() => handleOnClick(slug)}
          >
            <ListItemText primary={title} />
          </ListItem>
        );
      })}
    </Drawer>
  );
};
