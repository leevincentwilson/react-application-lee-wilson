import React, { useContext } from 'react';
import DOMPurify from 'dompurify';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { BlogContext } from '../../stores/blog';

export const Blog = () => {
  const { blog, fetching } = useContext(BlogContext);
  if (fetching) {
    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <CircularProgress color="secondary" />
      </div>
    );
  }
  const blogPosts = blog.map(({ title, id, content }) => {
    return (
      <div key={id} style={{ padding: 32 }}>
        <Typography variant="h3" color="secondary" gutterBottom>
          <div
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }}
          />
        </Typography>
        <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
        />
      </div>
    );
  });
  return <>{blogPosts}</>;
};
