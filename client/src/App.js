import React, {useState, useRef, useEffect} from 'react';
import ItemList from './ItemList'
import './App.css';

const LOCAL_STORAGE_KEY_ITEMS = 'itemizeApp.items';
const LOCAL_STORAGE_KEY_TOTAL = 'itemizeApp.total'

function App() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const itemNameRef = useRef();
  const itemValRef = useRef();

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

  function clickAddItem(e) {
    const name = itemNameRef.current.value;
    const val = itemValRef.current.value;
    if (name === '' || val === '') return;
    setItems(prevItems => {
      return [...prevItems, {id: `${prevItems.length + 1}`, name: name, val: val}];
    })
    itemNameRef.current.value = itemValRef.current.value = null;
    setTotal(prevTotal => {
      let newTotal = prevTotal - 0 + (val - 0);
      console.log(newTotal);
      return newTotal;
    })
  }

  function clickClearFields() {
    const newItems = [];
    const newTotal = 0;
    setItems(newItems);
    setTotal(newTotal);
  }

  return (
    <div className={'container'}>
      <button>Clear Fields</button>
      <p>
        <span>0</span>
        <input ref={itemNameRef} type='text' />
        <input ref={itemValRef} type='text'/>
        <button onClick={clickAddItem}>Add</button>
      </p>
      <ItemList items={items}/>
      <div>The abovementioned {items.length} items total is: ${total}</div>
      <button onClick={clickClearFields}>Clear Fields</button>
    </div>
  );
}

export default App;
