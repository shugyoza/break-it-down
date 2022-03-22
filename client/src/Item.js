import React, {useState, useRef, useEffect} from 'react';

export default function Item({item, idx, items, setItems, total, setTotal, editable, setEditable}) {
    const [btnText, setBtnText] = useState('Edit');
    const [alpha, setAlpha] = useState('')

    const inputNameRef = useRef();
    const inputValRef = useRef();

    const onEdit = () => {
        const text = editable ? 'Edit' : 'Update';
        setBtnText(text);
    }

    const editNameMode = (e) => {
        e.stopPropagation();
        setEditable(!editable);
        setAlpha(e.target.value);
        return;
    }

    const editValMode = (e) => {
        e.stopPropagation();
        setEditable(!editable);
        setAlpha(e.target.value);
        return;
    }

    function edit(e) {
        setAlpha(e.target.value)
    }

    const save = (e) => {
        console.log(e.target)
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
            <td>{idx + 1}</td>
            {editable ? <td ref={inputNameRef}><input id={`${item.id}-name`} type='text' onChange={edit} /></td> : <td id={item.id} onClick={editNameMode}>{item.name}</td>}
            {editable ? <td ref={inputValRef}><input id={`${item.id}-val`}type='text' onChange={edit} /></td> : <td id={item.id} onClick={editValMode}>{item.val}</td>}
            <button onClick={save}>Save</button>
            <button id={item.id} onClick={deleteItem}>Delete</button>
        </React.Fragment>
    )
}
