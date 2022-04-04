import React, {useState, useRef} from 'react';

export default function Item(props) {
    const {items, setItems, idx, item, setTotal, deleteItem} = props;

    const [alphaName, setAlphaName] = useState(item.name);
    const [alphaVal, setAlphaVal] = useState(item.val - 0);
    const [nameField, setNameField] = useState(false);   // boolean, default false
    const [valField, setValField] = useState(false);      // boolean, default false

    const updateNameRef = useRef();
    const updateValRef = useRef();

    // show the input field for name
    const showNameField = (e) => setNameField((prevNameField) => !prevNameField);

    // show the input field for val
    const showValField = (e) => setValField((prevValField) => !prevValField);

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

        const newItem = {...item};
        newItem.name = newName;
        const newItems = JSON.parse(JSON.stringify(items));
        newItems[idx] = newItem;
        setItems(newItems);


        // revert the element into a regular element (not an input field)
        setNameField((prevNameField) => !prevNameField);
        // reset the input field
        setAlphaName(newName);
    }

    const saveVal = (e) => {
        // if the user submitted a blank input field for val, do nothing
        if (!updateValRef.current.value.length) return;
        // grab the value from the input field, convert it into a typeof number
        const newVal = updateValRef.current.value - 0;
        // subtract the previous val from the current total
        setTotal((prevTotal) => prevTotal - item.val);
        // set new val
        // setVal(newVal);

        const newItem = {...item};
        newItem.val = newVal;

        setItems((prevItems) => {
            const newItems = JSON.parse(JSON.stringify(prevItems));
            newItems[idx] = newItem;
            return newItems;
        })


        // add new val to current total
        setTotal((prevTotal) => prevTotal + newVal);
        // revert back the input field
        setValField((prevValField) => !prevValField);
        // reset the input field value
        setAlphaVal(newVal);
    }

    const tdName = () => {
        if (nameField) return (
            <React.Fragment>
                <td id={`${'burh'}`}>
                    <input ref={updateNameRef} id={`${item.id}-name`} type='text' onChange={inputName} value={alphaName}/>
                    <button className='noprint' onClick={saveName}>Save</button>
                </td>
            </React.Fragment>
        )
        else return (
            <React.Fragment>
                <td id={item.id} onClick={showNameField}>{item.name}</td>
            </React.Fragment>
        )
    }

    const tdVal = () => {
        if (valField) return (
            <React.Fragment>
                <td>
                    <input ref={updateValRef} id={`${item.id}-val`} type='text' onChange={inputVal} value={alphaVal}/>
                    <button onClick={saveVal}>Save</button>
                </td>
            </React.Fragment>
        )
        else return <td id={item.id} onClick={showValField}>{item.val}</td>;
    }


    return (
        <React.Fragment>
            <td></td>
            {tdName()}
            {tdVal()}
            <button id={item.id} onClick={deleteItem}>Delete</button>
        </React.Fragment>
    )
}
