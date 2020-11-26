import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DOMPurify from 'dompurify';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    padding: 32,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
});

type pagePropsType = {
  title: string;
  content: string;
};
export const Page = ({ title, content }: pagePropsType) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" color="secondary" gutterBottom>
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }} />
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
        <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
        />
      </Typography>
    </div>
  );
};
