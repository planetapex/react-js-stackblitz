import React from 'react';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BlogCard from './BlogCard';

function BlogList() {
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    apiClient
      .get('/1')
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  if (error) return `Error: ${error.message}`;
  if (!post) return 'No post!';
  return (
    <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <BlogCard id={post.id} title={post.title} title={post.body} />
        </Col>
      ))}
    </Row>
  );
}

export default BlogList;
