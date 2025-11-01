import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4000/posts');
    setPosts(res.data);
  };

  useEffect(() => {
    void fetchPosts();
  }, []);

  // normalize to array whether API returns object keyed by id or a plain array
  const postsArray = Array.isArray(posts) ? posts : Object.values(posts || {});

  const renderPosts = () => {
    if (!postsArray || postsArray.length === 0) {
      return <div>No posts yet.</div>;
    }

    return postsArray.map((post) => {
      const key = post.id ?? post._id ?? post.title; // fallback keys
      return (
        <div
          key={key}
          className={'card'}
          style={{ width: '30%', marginBottom: '20px' }}
        >
          <div className='card-body'>
            <h3>{post.title}</h3>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={'d-flex flex-row justify-content-between flex-wrap'}>
      {renderPosts()}
    </div>
  );
};

export default PostList;
