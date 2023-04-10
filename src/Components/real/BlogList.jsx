import React, { useState } from 'react';
import axios from 'axios';
import LoadingSpinner from "../ui/loadingSpinner/LoadingSpinner";

// import blogApi from '../../data/blogApi';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BlogCard from './BlogCard';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
});

function BlogList() {
  const [posts, setPosts] = React.useState(null);
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setLoading] = useState(true); // Loading state
  const [errorMessage, setErrorMessage] = useState("");

  React.useEffect(() => {
    api
      .get()
      .then((response) => {
        console.log(response);
        setPosts(response.data);
        setLoading(false); //set loading state
      })
      .catch((error) => {
        setError(error);
        setErrorMessage("Unable to fetch user list");
        setIsLoading(false);
      });

  }, []);

  // {Array.from({ length: posts.length}).map((_, idx) => (
  //   <Col>
  //     <BlogCard id={post.id} title={post.title} body={post.body} />
  //   </Col>
  // ))}


  if (isLoading) {
    return (
      <LoadingSpinner />

    );
  }

  if (error) return `Error: ${error.message}`;
  // if (!posts) return 'No post!';



  const imgURL = "https://placekitten.com/100/250";


  return (
   
      <Row xs={1} md={4} className="g-4">

        {Array.from({ length: 30 }).map((_, idx) => (
          <Col>
            <BlogCard id={posts[idx].id} title={posts[idx].title} body={posts[idx].body} imageURL={`${imgURL}?p=${posts[idx].id}`} />
          </Col>
        ))}
      </Row>


   
   
  );
}

export default BlogList;
