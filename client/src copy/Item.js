import React, {useState, useRef, useEffect} from 'react';

export default function Item(props) {
    const [alpha, setAlpha] = useState('');
    const [input, setInput] = useState(props.input);
    const [item, setItem] = useState(props.item);

    const editMode = (e) => {
        e.stopPropagation();
        setInput(!input);
        setAlpha(e.target.value);
        return;
    }

    function edit(e) {
        setAlpha(e.target.value)
    }

    const save = (e) => {
        setInput(!input);
    }

    const tdName = () => {
        if (input.name) return (
            <React.Fragment>
                <td><input id={`${item.id}-name`} type='text' onChange={edit} placeholder={item.name}/></td>
            </React.Fragment>
        )
        else return (
            <React.Fragment>
                <td id={item.id} onClick={editMode}>{item.name}</td>
            </React.Fragment>
        )
    }

    const tdVal = () => {
        if (input.val) return <td><input id={`${item.id}-val`} type='text' onChange={edit} placeholder={item.val}/></td>;
        else return <td id={item.id} onClick={editMode}>{item.val}</td>;
    }

    function deleteItem(e) {
        console.log(e.target.id, props.items)
        let newItems = [];
        let newTotal;
        for (let i = 0; i < props.items.length; i++) {
            if (props.items[i].id === e.target.id) {
                newTotal = props.total - props.items[i].val;
                props.setTotal(newTotal);
            } else if (props.items[i].id !== e.target.id) {
                newItems.push(props.items[i]);
            }
        }
        props.setItems(newItems);
    }

    return (
        <React.Fragment>
            <td>{props.idx + 1}</td>
            {tdName()}
            {tdVal()}
            <button onClick={item.ed ? save : editMode}>{item.ed ? 'Save' : 'Edit'}</button>
            <button id={item.id} onClick={deleteItem}>Delete</button>
        </React.Fragment>
    )
}
