import React, {useState, useEffect, useRef} from 'react';
import ItemList from './ItemList';
import A from './App.css';
import From from './Sender';
import ItemAdd from'./ItemAdd';

const LOCAL_STORAGE_KEY_ITEMS = 'itemizeApp.items';
const LOCAL_STORAGE_KEY_TOTAL = 'itemizeApp.total';
const LOCAL_STORAGE_KEY_SENDER = 'itemizeApp.sender';

function App(props) {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const senderFields = 6;
  const [sender, setSender] = useState(new Array(senderFields).fill({text: '', editable: false}));

  const recipientFields = 6;
  const [recipient, setRecipient] = useState(new Array(senderFields).fill({text: '', editable: false}));

  const containerRef = useRef();

  // getItem and setItem are prescribed method for working with local storage
  // setItem(): method to add a key: value to localStorage;
  // getItem(): method to get an item from localStorage using the key;
  // removeItem(): method to delete an item from  localStorage based on its key;
  // clear(): method to delete all instances of localStorage;
  // key(): when we supply a number, it aids in the retrieval of a localStorage key.

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

  useEffect(() => {
    const storedSender = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_SENDER));
    if (storedSender) setSender(storedSender);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_SENDER, JSON.stringify(sender))
  }, [sender]);

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
    // console.log(e.target.id)
    // TODO set all editables false, save all text to item, and only set current's editables as true, if there is

  }

  return (
    <div onClick={save} ref={containerRef} className={'container'}>
      <h1 className='title noprint'>Itemize</h1>
      <From setSender={setSender} sender={sender} />
      <ItemList items={items} setItems={setItems} total={total} setTotal={setTotal} deleteItem={deleteItem} clickClearFields={clickClearFields} />
      <div>The total for {items.length} items is: ${total}</div>
      <div className='clearFields'><button className='noprint' onClick={clickClearFields}>Clear Fields</button></div>
      <h2 className='noprint'>Add</h2>
      <div className='tr'>
        <ItemAdd setItems={setItems} setTotal={setTotal} />
      </div>
      <p className='noprint'>Shugyoza, 2022, on React</p>
    </div>
  );
}

export default App;
