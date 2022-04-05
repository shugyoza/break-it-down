import React, {useRef, useEffect} from 'react';

export default function ItemAdd({setItems, setTotal}) {

    const itemNameRef = useRef();
    const itemValRef = useRef();

    // useEffect(() => {
    //     itemNameRef.current.focus();
    // }, [])

    function addItem(e) {
        const inputName = itemNameRef.current.value;
        const inputVal = itemValRef.current.value;
        const newID = `${Date.now()}`;
        if (inputName === '' || inputVal === '') return;
        setItems((prevItems) => [...prevItems, {id: newID, name: {text: inputName, editable: false}, val: {text: inputVal, editable: false}}])
        setTotal((prevTotal) => prevTotal - 0 + (inputVal - 0))
        itemNameRef.current.value = itemValRef.current.value = null;

        // when addItem clicked, the list render the created additional item, and put the cursor in the referred element
        // this is great feature for quick data entry only with keyboard!
        itemNameRef.current.focus();
    }

    return (
    <div className='tr add-item'>
        <div className='td seq noprint'>Add: </div>
        <div className='td col-1 noprint'><input className='value' ref={itemNameRef} type='text' placeholder='detail' /></div>
        <div className='td col-2 noprint'><input className='value' ref={itemValRef} type='text' placeholder='$ value'/></div>
        <div className='td btn-create'><button className='noprint add-item' onClick={addItem}>Create</button></div>
    </div>
  )
}
