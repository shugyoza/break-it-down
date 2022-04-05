import React, {useState, useRef} from 'react';

export default function Item(props) {
    const {items, setItems, idx, item, setTotal, deleteItem} = props;

    const [alphaName, setAlphaName] = useState(item.name.text);
    const [alphaVal, setAlphaVal] = useState(item.val.text - 0);
    const [nameField, setNameField] = useState(item.name.editable);   // boolean, default false
    const [valField, setValField] = useState(item.val.editable);      // boolean, default false

    const updateNameRef = useRef();
    const updateValRef = useRef();

    // show the input field for name
    const showNameField = (e) => setNameField(true);

    // show the input field for val
    const showValField = (e) => setValField(true);

    // type in the input field for name
    const inputName = (e) => setAlphaName(e.target.value);

    // type in the input filed for val
    const inputVal = (e) => setAlphaVal(e.target.value);

    // save whatever typed in the input field for name into database
    const saveName = (e) => {
        // if the user submitted a blank input field for the name, do nothing
        if (!updateNameRef.current.value.length) return;
        // grab the value from the input field
        const newName = updateNameRef.current.value;
        // change the state for name
        // create a deep copy of item
        const newItem = JSON.parse(JSON.stringify(item));
        // change the name.text value into newName
        newItem.name.text = newName;
        // revert the element into a regular element (not an input field)
        setNameField(false);
        // change the name's editable state back to false
        newItem.name.editable = false;
        // create a deep copy of items;
        const newItems = JSON.parse(JSON.stringify(items));
        // reassign the item object at that index with this newItem we created
        newItems[idx] = newItem;
        // save the modified items into the state
        setItems(newItems);
        // reset the input field value
        setAlphaName(newName);
    }

    const saveVal = (e) => {
        // if the user submitted a blank input field for val, do nothing
        if (!updateValRef.current.value.length) return;
        // grab the value from the input field, convert it into a typeof number
        const newVal = updateValRef.current.value - 0;
        // subtract the previous val from the current total
        setTotal((prevTotal) => prevTotal - (item.val.text - 0));
        // create a deep copy of the item object
        const newItem = JSON.parse(JSON.stringify(item));
        // change the old val value with the new one, typeof string
        newItem.val.text = '' + newVal;
        // reset the valField state back to false
        setValField(false)
        // change the val.editable back to false
        newItem.val.editable = false;
        // modify the items
        setItems((prevItems) => {
            // create a deep copy of the items
            const newItems = JSON.parse(JSON.stringify(prevItems));
            // replace the item at idx with our newItem
            newItems[idx] = newItem;
            // return the new items
            return newItems;
        })
        // add new val to current total
        setTotal((prevTotal) => prevTotal + newVal);
        // reset the input field value
        setAlphaVal(newVal);
    }

    const tdName = () => {
        if (nameField) return (
            <React.Fragment>
                <div className='td col-1' id={`${'burh'}`}>
                    <input ref={updateNameRef} id={`${item.id}-name`} type='text' onChange={inputName} value={alphaName}/>
                    <button className='btn-save noprint' onClick={saveName}>Save</button>
                </div>
            </React.Fragment>
        )
        else return (
            <React.Fragment>
                <div className='td col-1'><button className='value' id={item.id} onClick={showNameField}>{item.name.text}</button></div>
            </React.Fragment>
        )
    }

    const tdVal = () => {
        if (valField) return (
            <React.Fragment>
                <div class='td col-2'>
                    <input ref={updateValRef} id={`${item.id}-val`} type='text' onChange={inputVal} value={alphaVal}/>
                    <button className='btn-save noprint' onClick={saveVal}>Save</button>
                </div>
            </React.Fragment>
        )
        else return <div className='td col-2'><button className='value' id={item.id} onClick={showValField}>{item.val.text}</button></div>;
    }


    return (
        <React.Fragment>
            <div className='td seq'>{idx + 1}</div>
            {tdName()}
            {tdVal()}
            <div className='td btn-delete noprint'><button className='noprint' id={item.id} onClick={deleteItem}>Delete</button></div>
        </React.Fragment>
    )
}
