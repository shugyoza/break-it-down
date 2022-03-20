import React, {useState, useRef, useEffect} from 'react';
import ItemList from './ItemList'
import './App.css';

const LOCAL_STORAGE_KEY = 'itemizeApp.items'

function App() {
  const [items, setItems] = useState([]);
  const itemNameRef = useRef();
  const itemValRef = useRef();

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedItems) setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items))
  }, [items]);

  function clickAddItem(event) {
    const name = itemNameRef.current.value;
    const val = itemValRef.current.value;
    if (name === '' || val === '') return;
    setItems(prevItems => {
      return [...prevItems, {id: `${prevItems.length + 1}`, name: name, val: val}];
    })
    itemNameRef.current.value = null;
  }

  function clickClearFields() {
    const newItems = [];
    setItems(newItems);
  }

  return (
    <React.Fragment>
      <button>Clear Fields</button>
      <p>
        <input ref={itemNameRef} type='text' />
        <input ref={itemValRef} type='text'/>
        <button onClick={clickAddItem}>Add</button>
      </p>
      <ItemList items={items}/>
      <hr />
      <div>{items.length}</div>
      <button onClick={clickClearFields}>Clear Fields</button>
    </React.Fragment>
  );
}

export default App;
