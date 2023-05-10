import {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer
} from 'react';
import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import postReducer from './postReducer';

export const UserContext = createContext();
export const PostContext = createContext({
  posts: []
});

export default function App() {
  const initialPostState = useContext(PostContext);
  const [state, dispatch] = useReducer(postReducer, initialPostState);

  const [user, setUser] = useState('');
  // const [posts, setPosts] = useState([]);
  document.title = user ? `${user}'s Feed` : 'Please login';
  useEffect(() => {}, [user]);

  // const handleAddPost = useCallback((newPost) => {
  //   setPosts((prevPosts) => [newPost, ...prevPosts]);
  // }, []);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      <UserContext.Provider value={{ user: user }}>
        <Header
          user={user}
          setUser={setUser}
        />
        <CreatePost
          user={user}
          // handleAddPost={handleAddPost}
        />
        <PostList posts={state.posts} />
      </UserContext.Provider>
    </PostContext.Provider>
  );
}
