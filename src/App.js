import React, {useState, useEffect, useRef} from 'react';
import ItemList from './ItemList';
import A from './App.css';
import DateNo from './DateNo';
import Seller from './Seller';
import Buyer from './Buyer';
import Note from './Note';
import {showPennies} from './utils';

const LOCAL_STORAGE_KEY_ITEMS = 'itemizeApp.items';
const LOCAL_STORAGE_KEY_TOTAL = 'itemizeApp.total';
const LOCAL_STORAGE_KEY_SELLER = 'itemizeApp.seller';
const LOCAL_STORAGE_KEY_BUYER = 'itemizeApp.buyer';
const LOCAL_STORAGE_KEY_INV = 'itemizeApp.inv';
const LOCAL_STORAGE_KEY_NOTE = 'itemizeApp.note';


function App(props) {

  const [dateNo, setDateNo] = useState(['', '']);

  const sellerFields = 6;
  const [seller, setSeller] = useState(new Array(sellerFields).fill(''));

  const buyerFields = 6;
  const [buyer, setBuyer] = useState(new Array(buyerFields).fill(''));

  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [note, setNote] = useState('');

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

  useEffect(() => {
    const storedDateNo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_INV));
    if (storedDateNo) setDateNo(storedDateNo);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_INV, JSON.stringify(dateNo))
  }, [dateNo]);

  useEffect(() => {
    const storedNote = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NOTE));
    if (storedNote) setNote(storedNote);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_NOTE, JSON.stringify(note))
  }, [note]);

  function clickClearFields() {
    const newItems = [];
    const newTotal = 0;
    setItems(newItems);
    setTotal(newTotal);
    return {items, total};
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
    // if (!newItems.length) setTotal(0);
}

  function toIntX100(nStr) {
    // convert into a number first
    let n = nStr * 100;
    console.log(106, n)
    // grab the tailing decimal
    let dec = n % 1;
    // this if is to anticipate floating point/num problem, e.g. "9.87" => 986.99 => 986 => 9.86
    if (dec > 0.9) return n - dec + 1;
    // round the n
    n = n - dec;
    console.log(111, n)
    // return the rounded n
    return n;
  }

  return (
    <div ref={containerRef} className={'container'}>
      <h1 data-testid='app-title' className='title noprint'>Itemize</h1>
      <h2 data-testid='print-title' id='title'>INVOICE</h2>
      <DateNo dateNo={dateNo} setDateNo={setDateNo} />
      <section className='parties-info'>
        <Seller setSeller={setSeller} seller={seller} />
        <Buyer setBuyer={setBuyer} buyer={buyer} />
      </section>
      <ItemList items={items} setItems={setItems} total={total} setTotal={setTotal} deleteItem={deleteItem} clickClearFields={clickClearFields} toIntX100={toIntX100} showPennies={showPennies} />
      <div>The total for {items.length} items is: ${showPennies(total)}</div>
      <div className='clearFields'><button className='noprint btn-delete' onClick={clickClearFields}>Delete ALL Items</button></div>
      <Note note={note} setNote={setNote} />
      <p className='noprint footer'>Shugyoza, 2022, using JavaScript, Node.js, React, HTML and CSS</p>
    </div>
  );
}

export default App;
