import React from "react";

const PostsCreate = () => {
    return <div>
        <form onSubmit={e => e.preventDefault()}>
            <div>
                <label>Title</label>
                <input type="text" name="title" />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>;
}

export default PostsCreate;