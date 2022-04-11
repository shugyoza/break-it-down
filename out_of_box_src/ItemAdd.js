import React, {useRef} from 'react';

export default function ItemAdd(props) { // props is an object. if we use {a, b}, we don't have to refer as props.a, props.b

    const itemNameRef = useRef();
    const itemValRef = useRef();

    function clickAddItem(e) {
        const inputName = itemNameRef.current.value;
        const inputVal = itemValRef.current.value;
        if (inputName === '' || inputVal === '') return;
        const newItem = {id: `${Date.now()}`, name: inputName, val: inputVal};
        props.setItems((prevItems) => {
          return [...prevItems, newItem];
        });
        itemNameRef.current.value = itemValRef.current.value = null;
        props.setTotal((prevTotal) => {
          let newTotal = prevTotal - 0 + (inputVal - 0);
          return newTotal;
        });
        // we have a field for each name and val, so we have to have an object that represents both state
        props.setInputs((prevInputs) => {
            return [...prevInputs, {name: false, val: false}];
        });
      }

    return (
    <React.Fragment>
        <td></td>
        <td><input id='detail' ref={itemNameRef} type='text' placeholder='detail' /></td>
        <td><input id='value' ref={itemValRef} type='text' placeholder='$ value'/></td>
        <button onClick={clickAddItem}>Add</button>
    </React.Fragment>
  )
}
