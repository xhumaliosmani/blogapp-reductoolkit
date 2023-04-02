import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from './redux/slices/counterSlices';
import './App.css';




function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(fetchPost())
  },[]);

  const post = useSelector(state => state.post);
  const {postsLists, loading} = post;

  console.log(postsLists, loading);
  
  return (
    <div className="App">
      <h1>Post List</h1>
      <div>
        {loading ? <h2>Loading, please wait</h2> : postsLists.map((post)=> {
          return (
            <>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <hr/>
            </>
          )
        })}
      </div>
    </div>
  );
}

export default App;
