import React, {useState, useRef, useEffect} from 'react';
import BreakDownList from './BreakDownList'
import './App.css';

const LOCAL_STORAGE_KEY = 'breakdownApp.details'

function App() {
  const [details, setDetails] = useState([]);
  const detailDescRef = useRef();
  return (
    <React.Fragment>
      <BreakDownList />
      <input ref={detailDescRef} type='text' />
      <button onClick={}>Add Item</button>
      <button onClick={}>Clear ALL Fields</button>
      <div>Total items: {}</div>
    </React.Fragment>
  );
}

export default App;
