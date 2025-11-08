import React from 'react';

const CommentList = ({ comments }) => {
  const renderComments = () => {
    return comments.map((comment, index) => (
      <li key={comment.id ?? comment._id ?? index}>{comment.content}</li>
    ));
  };

  return <ul>{renderComments()}</ul>;
};

export default CommentList;
