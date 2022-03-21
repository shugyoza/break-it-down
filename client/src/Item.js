import React, {useState, useRef, useEffect} from 'react'

export default function Item({item}) {
    const itemNameRef = useRef();
    const itemValRef = useRef();
    const itemRef = useRef();

    function changeName(e) {
        const name = itemNameRef.current.value
        if (name === '') return;
        return item.name = name;
    }

    function changeVal(e) {

    }

    function deleteItem() {

    }

    return (
        <tr key={item.id} ref={itemRef}>
            <td>{item.id}</td>
            <td><input onChange={changeName} value={item.name} ref={itemNameRef} type='text'/></td>
            <td><input onChange={changeVal} value={item.val} ref={itemValRef} type='text' /></td>
            <button onClick={deleteItem}>Delete</button>
        </tr>
    )
}
