import React, { FunctionComponent } from 'react';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from 'react-router-dom';
import { navProps } from '../../types';
import { useStyles } from './style';

type NavDrawerProps = navProps & {
  open: boolean;
};
export const NavDrawer: FunctionComponent<NavDrawerProps> = ({
  open,
  toggleDrawer,
}: NavDrawerProps) => {
  const history = useHistory();
  const classes = useStyles();
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
      <ListItem
        button
        className={classes.buttons}
        onClick={() => handleOnClick('/blog')}
      >
        <ListItemText primary="Blog" />
      </ListItem>
    </Drawer>
  );
};
