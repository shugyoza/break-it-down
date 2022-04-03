import React, {useState, useRef, useEffect} from 'react';
import ItemAdd from './ItemAdd';
import ItemList from './ItemList';
import './App.css';

const LOCAL_STORAGE_KEY_ITEMS = 'itemizeApp.items';
const LOCAL_STORAGE_KEY_TOTAL = 'itemizeApp.total'

function App() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_ITEMS));
    if (storedItems) setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_ITEMS, JSON.stringify(items))
  }, [items]);

  useEffect(() => {
    const storedTotal = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TOTAL));
    if (storedTotal) setTotal(storedTotal);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_TOTAL, JSON.stringify(total))
  }, [total]);

  function clickClearFields() {
    const newItems = [];
    const newTotal = 0;
    const newInputs = [];
    setItems(newItems);
    setTotal(newTotal);
    setInputs(newInputs);
  }

  return (
    <div className={'container'}>
      <button onClick={clickClearFields}>Clear Fields</button>
      <ItemList items={items} setItems={setItems} total={total} setTotal={setTotal} inputs={inputs} setInputs={setInputs}/>
      <div>The total for {items.length} items is: ${total}</div>
      <button onClick={clickClearFields}>Clear Fields</button>
    </div>
  );
}

export default App;
