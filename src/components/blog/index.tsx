import React, { useContext } from 'react';
import DOMPurify from 'dompurify';
import Typography from '@material-ui/core/Typography';
import { BlogContext } from '../../stores/blog';

export const Blog = () => {
  const { blog } = useContext(BlogContext) || { blog: [] };
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
