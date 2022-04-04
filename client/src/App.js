import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import './App.css';

const LOCAL_STORAGE_KEY_ITEMS = 'itemizeApp.items';
const LOCAL_STORAGE_KEY_TOTAL = 'itemizeApp.total'

function App() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

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
    setItems(newItems);
    setTotal(newTotal);
  }

  function deleteItem(e) {
    let newItems = [];
    let newTotal;
    for (let i = 0; i < items.length; i++) {
        if (items[i].id === e.target.id) {
            newTotal = total - (items[i].val.text - 0);
            setTotal(newTotal);
        } else if (items[i].id !== e.target.id) {
            newItems.push(JSON.parse(JSON.stringify(items[i])));
        }
    }
    setItems(newItems);
}

  return (
    <div className={'container'}>
      <div className='clearFields'><button className='noprint' onClick={clickClearFields}>Clear Fields</button></div>
      <ItemList items={items} setItems={setItems} total={total} setTotal={setTotal} deleteItem={deleteItem}/>
      <div>The total for {items.length} items is: ${total}</div>
      <div className='clearFields'><button className='noprint' onClick={clickClearFields}>Clear Fields</button></div>
    </div>
  );
}

export default App;
