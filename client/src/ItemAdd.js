import React, {useRef} from 'react';

export default function ItemAdd({items, setItems, total, setTotal, inputs, setInputs}) {

    const itemNameRef = useRef();
    const itemValRef = useRef();

    // function clickAddItem(e) {
    //     const name = itemNameRef.current.value;
    //     const val = itemValRef.current.value;
    //     if (name === '' || val === '') return;
    //     const newItem = {id: `${Date.now()}`, name: name, val: val};
    //     setItems((prevItems) => {
    //       return [...prevItems, newItem];
    //     });
    //     itemNameRef.current.value = itemValRef.current.value = null;
    //     setTotal((prevTotal) => {
    //       let newTotal = prevTotal - 0 + (val - 0);
    //       return newTotal;
    //     });
    //   }

    function clickAddItem(e) {
        const inputName = itemNameRef.current.value;
        const inputVal = itemValRef.current.value;
        const newID = `${Date.now()}`;
        if (inputName === '' || inputVal === '') return;
        setItems((prevItems) => [...prevItems, {id: newID, name: inputName, val: inputVal}])
        setTotal((prevTotal) => prevTotal - 0 + (inputVal - 0))
        setInputs((prevInputs) => [...prevInputs, {name: false, val: false}])
        itemNameRef.current.value = itemValRef.current.value = null;
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
