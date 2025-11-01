import React, { useState } from 'react';
import axios from 'axios';

const CommentCreate = ({ postsId }) => {
  const [comment, setComment] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postsId}/comments`, {
      content: comment,
    });
    setComment('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label>New Comment</label>
          <input
            type='text'
            className='form-control'
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button className='btn btn-primary' style={{ marginTop: '10px' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentCreate;
