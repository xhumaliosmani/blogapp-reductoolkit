import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./redux/slices/counterSlices";
import "./App.css";
import {
  decrement,
  increment,
  increaseAmount,
} from "./redux/slices/counterSlicesBuilderMap";

function App() {
  const [noPosts, setNoPosts] = useState(false);
  const [valueInput, setValueInput] = useState("");

  const dispatch = useDispatch();

  const post = useSelector((state) => state.post);
  const counter = useSelector((state) => state.counter.value);

  const { postsLists, loading } = post;

  // useEffect(()=> {
  //   dispatch(fetchPost())
  // },[]);

  // const postsLists = useSelector(state => state.post.postsLists);
  // const loading = useSelector(state => state.post.loading);

  const loadPosts = () => {
    dispatch(fetchPost());
    setNoPosts(true);
  };

  // Event handler to update the inputValue state.
  const handleInputChange = (event) => {
    setValueInput(parseInt(event.target.value, 10));
  };

  // Event handler for the button click.
  const handleButtonClick = () => {
    // Assuming you want to pass the inputValue to increaseAmount action.
    dispatch(increaseAmount(valueInput));
  };

  //animation section
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Set the animate state to true when counter changes
    setAnimate(true);

    // Remove the animation class after the transition duration to reset the state
    const timeoutId = setTimeout(() => setAnimate(false), 300);

    // Clean up timeout on unmount or counter change to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [counter]);

  return (
    <div className="text-center font-poppins bg-gray-100 min-h-screen p-8 overflow-hidden">
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h1 className="text-2xl font-bold mb-4">Counter</h1>
        <p
          className={`text-xl mb-4 counter-transition ${
            animate ? "animate" : ""
          }`}
        >
          {counter}
        </p>
        <button
          onClick={() => dispatch(increment())}
          className="mr-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increase Counter
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrease Counter
        </button>
        <div className="mt-4">
          <span className="mr-4">Increase Amount</span>
          <input
            type="number"
            value={valueInput}
            onChange={handleInputChange}
            className="border border-gray-300 focus:outline-none focus:border-blue-400 focus:shadow-blue-400/20 focus:shadow-md  rounded py-2 px-4 mr-4"
          />
          <button
            onClick={handleButtonClick}
            className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Set Value
          </button>
        </div>
      </div>

      <h1 className="text-2xl font-bold mb-4">Post List</h1>
      {!noPosts && (
        <button
          onClick={() => loadPosts()}
          className="mb-4 py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Load Posts
        </button>
      )}

      <div className="space-y-4">
        {postsLists ? (
          postsLists.map((post) => {
            return (
              <div className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
                <h1 className="text-2xl font-semibold mb-4 text-white shadow-text flex flex-col items-center">
                  {post.title}
                  <div className="w-[50%] h-[1px] bg-gray-400/50 mt-4"></div>
                </h1>
                <p className="text-gray-100 mt-2">{post.body}</p>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
