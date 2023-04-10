import React from 'react';
import Card from 'react-bootstrap/Card';

const BlogCard = ({ id, title, body }) => {
  return (
    <Card key={id}>
      <Card.Img
        className="thumbnail"
        width="100"
        height="360"
        variant="top"
        src="https://placekitten.com/100/200"
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
