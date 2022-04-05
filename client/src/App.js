import React, {useState, useEffect, useRef} from 'react';
import ItemList from './ItemList';
import A from './App.css';
import DateNo from './DateNo';
import Seller from './Seller';
import Buyer from './Buyer';

const LOCAL_STORAGE_KEY_ITEMS = 'itemizeApp.items';
const LOCAL_STORAGE_KEY_TOTAL = 'itemizeApp.total';
const LOCAL_STORAGE_KEY_SELLER = 'itemizeApp.seller';
const LOCAL_STORAGE_KEY_BUYER = 'itemizeApp.buyer';


function App(props) {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const sellerFields = 6;
  const [seller, setSeller] = useState(new Array(sellerFields).fill(''));

  const buyerFields = 6;
  const [buyer, setBuyer] = useState(new Array(buyerFields).fill(''));

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
    const storedSeller = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_SELLER));
    if (storedSeller) setSeller(storedSeller);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_SELLER, JSON.stringify(seller))
  }, [seller]);

  useEffect(() => {
    const storedBuyer = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_BUYER));
    if (storedBuyer) setBuyer(storedBuyer);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_BUYER, JSON.stringify(buyer))
  }, [buyer]);


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
    <div ref={containerRef} className={'container'}>
      <h1 className='title noprint'>Itemize</h1>
      <DateNo />
      <Seller setSeller={setSeller} seller={seller} />
      <Buyer setBuyer={setBuyer} buyer={buyer} />
      <ItemList items={items} setItems={setItems} total={total} setTotal={setTotal} deleteItem={deleteItem} clickClearFields={clickClearFields} />
      <div>The total for {items.length} items is: ${total}</div>
      <div className='clearFields'><button className='noprint' onClick={clickClearFields}>Clear Fields</button></div>
      <p className='noprint'>Shugyoza, 2022, on React</p>
    </div>
  );
}

export default App;
