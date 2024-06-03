import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';

import { increment, decrement } from "./Component/Action";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <div className="border rounded rounded-3 text-center shadow-lg counter">
        <h2 className="mt-3 text-secondary">Counter App</h2>
        <h5 className="mb-3">Count: {count}</h5>
        <button className="btn border fw-bold" onClick={() => dispatch(increment())}> + </button>
        <button className="btn border ms-2 fw-bold" onClick={() => dispatch(decrement())}> - </button>
      </div>
    </>
  );
}

export default App;
