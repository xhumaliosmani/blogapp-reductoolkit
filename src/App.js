import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from './redux/slices/counterSlices';
import {countUp, countDown} from '../src/redux/slices/counterslice2'
import './App.css';




function App() {
  const [noPosts, setNoPosts] = useState(false);

  const dispatch = useDispatch();
  // useEffect(()=> {
  //   dispatch(fetchPost())
  // },[]);

  // const postsLists = useSelector(state => state.post.postsLists);
  // const loading = useSelector(state => state.post.loading);

    const post = useSelector(state => state.post);
  const {postsLists, loading} = post;
  const counter = useSelector(state => state.counter.value);

  console.log(postsLists, loading);

  const loadPosts = () => {
    dispatch(fetchPost());
    setNoPosts(true)
  }
  
  return (
    <div className="App">
    <div>
      <h1>Counter</h1>
      <p>{counter}</p>
      <button onClick={()=> dispatch(countUp())}>Increase Counter</button>
       <button onClick={()=> dispatch(countDown())}>Decrease Counter</button>
    </div>
      <h1>Post List</h1>
      {!noPosts && <button onClick={()=>loadPosts()}>Load Posts</button>}
      <div>
      {postsLists ? (postsLists.map((post)=> {
        return (
          <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          </div>
          )
          })) : <></>}

      </div>
    </div>
  );
}

export default App;
