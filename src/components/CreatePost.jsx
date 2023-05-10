import React, { useRef, useState, useContext } from 'react';
import { PostContext } from '../App';

export default function CreatePost({ user }) {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const imageInputRef = useRef();
  const { dispatch } = useContext(PostContext);

  const textInputChangeHandler = (e) => {
    setContent(e.target.value);
  };
  const filetInputChangeHandler = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { content, image, user, id: Date.now() };
    dispatch({ type: 'ADD_POST', payload: { post } });
    // handleAddPost(post);
    setContent('');
    imageInputRef.current.value = '';
  };

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Post Content"
          onChange={textInputChangeHandler}
          value={content}
        />
        <input
          type="file"
          onChange={filetInputChangeHandler}
          ref={imageInputRef}
        />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
}
