import React, { useContext } from 'react';
import { UserContext, PostContext } from '../App';

export default function Post({ image, content, user, id }) {
  const currentUser = useContext(UserContext).user;
  const { dispatch } = useContext(PostContext);
  const isCurrentUser = currentUser === user;

  const handleDeletePost = () => {
    dispatch({ type: 'REMOVE_POST', payload: { id } });
  };

  return (
    <>
      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="Post cover"
          style={{ height: 100, objectFit: 'cover' }}
        />
      )}
      <p>{content}</p>
      <div style={{ color: isCurrentUser && 'green' }}>{user}</div>
      <div>
        {isCurrentUser && <button onClick={handleDeletePost}>Delete</button>}
      </div>
    </>
  );
}
