import React, {useState, useRef, useEffect} from 'react';

export default function Line({item}) {

    const tdName = () => {
        if (item.ed) return (
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
        if (item.ed) return <td><input id={`${item.id}-val`} type='text' onChange={edit} placeholder={item.val}/></td>;
        else return <td id={item.id} onClick={editMode}>{item.val}</td>;
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
            {tdName()}
            {tdVal()}
            <button onClick={item.ed ? save : editMode}>{item.ed ? 'Save' : 'Edit'}</button>
            <button id={item.id} onClick={deleteItem}>Delete</button>
        </React.Fragment>
    )
}
