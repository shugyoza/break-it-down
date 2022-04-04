import React, {useRef} from 'react';

export default function ItemAdd({setItems, setTotal}) {

    const itemNameRef = useRef();
    const itemValRef = useRef();

    function addItem(e) {
        const inputName = itemNameRef.current.value;
        const inputVal = itemValRef.current.value;
        const newID = `${Date.now()}`;
        if (inputName === '' || inputVal === '') return;
        setItems((prevItems) => [...prevItems, {id: newID, name: {text: inputName, editable: false}, val: {text: inputVal, editable: false}}])
        setTotal((prevTotal) => prevTotal - 0 + (inputVal - 0))
        itemNameRef.current.value = itemValRef.current.value = null;
    }

    return (
    <div className='tr add-item'>
        <div className='td noprint'></div>
        <div className='td noprint'><input className='value' ref={itemNameRef} type='text' placeholder='detail' /></div>
        <div className='td noprint'><input className='value' ref={itemValRef} type='text' placeholder='$ value'/></div>
        <div className='td'><button className='noprint add-item' onClick={addItem}>Create</button></div>
    </div>
  )
}
