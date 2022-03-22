import React, {useState, useRef} from 'react';

export default function Item({item, idx, items, setItems, total, setTotal}) {
    const itemNameRef = useRef();
    const itemValRef = useRef();
    const itemRef = useRef();

    // const onEdit = () => {
    //     const text = editable ? 'Edit' : 'Update';
    //     setBtnText(text);
    // }

    function editName(e) {
        console.log(e.target.value);
        console.log(item);
        return (
            <input type='text'/>
        )
    }

    function editVal(e) {

    }

    function saveEditName(e) {

    }

    function saveEditVal(e) {

    }

    function deleteItem(e) {
        console.log(e.target.id, items)
        let newItems = [];
        let newTotal;
        for (let i = 0; i < items.length; i++) {
            if (items[i].id === e.target.id) {
                newTotal = total - items[i].val;
                setTotal(newTotal);
            } else if (items[i].id !== e.target.id) {
                newItems.push(items[i]);
            }
        }
        setItems(newItems);
    }

    return (
        <React.Fragment>
            <td onClick={editName} ref={itemNameRef}>{item.name}</td>
            <td onClick={editVal} ref={itemValRef}>{item.val}</td>
            <button id={item.id} onClick={deleteItem}>Delete</button>
        </React.Fragment>
    )
}
