import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Backdrop from '@material-ui/core/Backdrop';
import { useStyles } from './styles';

export const Login = () => {
  const classes = useStyles();
  const [userName, setUserName] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  const handleLogin = () => {};

  return (
    <div className={classes.root}>
      <Backdrop open data-testid="backdrop" />
      <Paper
        className={classes.paper}
        elevation={3}
        data-testid="fabButton_addToDo"
      >
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            label="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            data-testid="textField_userName"
          />
          <TextField
            label="Password"
            value={userPassword}
            type="password"
            onChange={(e) => setUserPassword(e.target.value)}
            data-testid="textField_userPassword"
          />
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              data-testid="button_add"
            >
              Login
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};
