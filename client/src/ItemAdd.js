import React, {useRef} from 'react';

export default function ItemAdd({setItems, setTotal}) {

    const itemNameRef = useRef();
    const itemValRef = useRef();

    function clickAddItem(e) {
        const name = itemNameRef.current.value;
        const val = itemValRef.current.value;
        if (name === '' || val === '') return;
        setItems(prevItems => {
          return [...prevItems, {id: `${Date.now()}`, name: name, val: val}];
        })
        itemNameRef.current.value = itemValRef.current.value = null;
        setTotal(prevTotal => {
          let newTotal = prevTotal - 0 + (val - 0);
          return newTotal;
        })
      }

    return (
    <React.Fragment>
        <td><input id='detail' ref={itemNameRef} type='text' placeholder='detail' /></td>
        <td><input id='value' ref={itemValRef} type='text' placeholder='$ value'/></td>
        <button onClick={clickAddItem}>Add</button>
    </React.Fragment>
  )
}
