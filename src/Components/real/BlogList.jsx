import React from 'react';
import axios from 'axios';
// import blogApi from '../../data/blogApi';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BlogCard from './BlogCard';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

function BlogList() {
  // const [responseData, setResponseData] = React.useState('');
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);

  // React.useEffect(() => {
  //   api
  //     .get('/1')
  //     .then((response) => {
  //       console.log(response);
  //       setPost(response.data);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     });
  // }, []);

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
