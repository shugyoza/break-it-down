import React, {useRef} from 'react';

export default function ItemAdd({setItems, setTotal}) {

    const itemNameRef = useRef();
    const itemValRef = useRef();

    function clickAddItem(e) {
        const inputName = itemNameRef.current.value;
        const inputVal = itemValRef.current.value;
        const newID = `${Date.now()}`;
        if (inputName === '' || inputVal === '') return;
        setItems((prevItems) => [...prevItems, {id: newID, name: inputName, val: inputVal}])
        setTotal((prevTotal) => prevTotal - 0 + (inputVal - 0))
        itemNameRef.current.value = itemValRef.current.value = null;
    }

    return (
    <React.Fragment>
        <td className='noprint'></td>
        <td className='noprint detail'><input className='detail' ref={itemNameRef} type='text' placeholder='detail' /></td>
        <td className='noprint value'><input className='value' ref={itemValRef} type='text' placeholder='$ value'/></td>
        <button className='noprint add-item' onClick={clickAddItem}>Add</button>
    </React.Fragment>
  )
}
