import { useDispatch, useSelector } from 'react-redux';
import './App.css';




function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state)=> state?.counter);
  console.log(counter);
  return (
    <div className="App">
      <h1>Post List</h1>
    </div>
  );
}

export default App;
