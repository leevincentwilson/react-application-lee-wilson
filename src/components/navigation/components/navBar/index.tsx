import React, { FunctionComponent, useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Route } from 'react-router-dom';
import { useStyles } from './style';
import { navProps } from '../../types';
import { AuthContext } from '../../../../global/auth/authProvider';
import { PagesContext } from '../../../../stores/pages';

export const NavBar: FunctionComponent<navProps> = ({
  toggleDrawer,
}: navProps) => {
  const classes = useStyles();
  const Auth = useContext(AuthContext);

  const pageData = useContext(PagesContext) || { pages: [] };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        {pageData.pages.map(({ id, slug, title }) => {
          return (
            <Route path={`/page/${slug}`} key={id}>
              <Typography variant="h6" className={classes.title}>
                {title}
              </Typography>
            </Route>
          );
        })}
        <Typography variant="h6" className={classes.title}>
          <Route path="/blog">10UP Blog</Route>
        </Typography>
        {Auth ? (
          <Button color="inherit" onClick={Auth.logout}>
            LogOut
          </Button>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};
