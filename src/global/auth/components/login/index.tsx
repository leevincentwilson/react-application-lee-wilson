import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from './styles';
import { userCredentialsType } from '../../types';

type LoginProps = {
  login: (userCredentials: userCredentialsType) => void;
  fetchingCredentials: boolean;
};
export const Login = ({ login, fetchingCredentials }: LoginProps) => {
  const classes = useStyles();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    login({
      username,
      password,
    });
  };

  return (
    <div className={classes.root}>
      <Paper
        className={classes.paper}
        elevation={3}
        data-testid="fabButton_addToDo"
      >
        <Typography variant="h5" className={classes.title}>
          Login to 10UP
        </Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            label="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            data-testid="textField_username"
          />
          <TextField
            label="Password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            data-testid="textField_userPassword"
          />
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              data-testid="button_add"
              disabled={fetchingCredentials}
            >
              {fetchingCredentials ? (
                <CircularProgress color="inherit" size={20} />
              ) : (
                'SignIn'
              )}
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};
