import React, {useState, useEffect, useRef} from 'react';
import ItemList from './ItemList';
import A from './App.css';
import From from './From';
import ItemAdd from'./ItemAdd';

const LOCAL_STORAGE_KEY_ITEMS = 'itemizeApp.items';
const LOCAL_STORAGE_KEY_TOTAL = 'itemizeApp.total'

function App(props) {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const containerRef = useRef();

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

  function save(e) {
    console.log(e.target.id)
    // TODO set all editables false, save all text to item, and only set current's editables as true, if there is

  }

  return (
    <div onClick={save} ref={containerRef} className={'container'}>
      <p className='title noprint'><h1>Itemize</h1></p>
      <From />
      <p className='noprint'><h2>Add Item</h2></p>
      <div className='tr'>
        <ItemAdd setItems={props.setItems} setTotal={props.setTotal} />
      </div>
      <ItemList items={items} setItems={setItems} total={total} setTotal={setTotal} deleteItem={deleteItem} clickClearFields={clickClearFields} />
      <div>The total for {items.length} items is: ${total}</div>
      <div className='clearFields'><button className='noprint' onClick={clickClearFields}>Clear Fields</button></div>
      <p className='noprint'>Shugyoza, 2022, on React</p>
    </div>
  );
}

export default App;
