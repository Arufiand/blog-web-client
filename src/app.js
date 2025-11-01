import React from 'react';
import PostsCreate from "./PostsCreate";
import PostList from "./PostList";

const App = () => {
    return <div className="container">
        <h1>Posts Create</h1>
        <PostsCreate />

        <br/>
        <h1>Posts List</h1>
         <PostList />
    </div>;
}

export default App;