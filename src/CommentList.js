import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommentList = ({ postsId }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    if (!postsId) return;
    try {
      const res = await axios.get(
        `http://localhost:4001/posts/${postsId}/comments`
      );
      setComments(res.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  useEffect(() => {
    void fetchComments();
  }, []);

  const renderComments = () => {
    return comments.map((comment, index) => (
      <li key={comment.id ?? comment._id ?? index}>{comment.content}</li>
    ));
  };

  return <ul>{renderComments()}</ul>;
};

export default CommentList;
