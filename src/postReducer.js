function postReducer(state, action) {
  switch (action.type) {
    case 'ADD_POST': {
      const newPost = action.payload.post;
      return { posts: [newPost, ...state.posts] };
    }
    case 'REMOVE_POST': {
      const postToDeleteId = action.payload.id;
      return {
        posts: state.posts.filter((post) => post.id !== postToDeleteId)
      };
    }
    default: {
      return state;
    }
  }
}

export default postReducer;
