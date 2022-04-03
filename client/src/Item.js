import React, {useState, useRef} from 'react';

export default function Item(props) {
    const [alphaName, setAlphaName] = useState(props.item.name);
    const [alphaVal, setAlphaVal] = useState(props.item.val);
    const [nameField, setNameField] = useState(props.input.name);   // boolean, default false
    const [valField, setValField] = useState(props.input.val);      // boolean, default false

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

        const newItem = {...props.item};
        newItem.name = newName;
        const newItems = JSON.parse(JSON.stringify(props.items));
        newItems[props.idx] = newItem;
        props.setItems(newItems);


        // revert the element into a regular element (not an input field)
        setNameField((prevNameField) => !prevNameField);
        // reset the input field
        setAlphaName('');
    }

    const saveVal = (e) => {
        // if the user submitted a blank input field for val, do nothing
        if (!updateValRef.current.value.length) return;
        // grab the value from the input field, convert it into a typeof number
        const newVal = updateValRef.current.value - 0;
        // subtract the previous val from the current total
        props.setTotal((prevTotal) => prevTotal - props.item.val);
        // set new val
        // setVal(newVal);

        const newItem = {...props.item};
        newItem.val = newVal;
/*         const newItems = JSON.parse(JSON.stringify(props.items));
        newItems[props.idx] = newItem;
        props.setItems(newItems); */

        props.setItems((prevItems) => {
            const newItems = JSON.parse(JSON.stringify(prevItems));
            newItems[props.idx] = newItem;
            return newItems;
        })


        // add new val to current total
        props.setTotal((prevTotal) => prevTotal + newVal);
        // revert back the input field
        setValField((prevValField) => !prevValField);
        // reset the input field value
        setAlphaVal('');
    }

    const tdName = () => {
        if (nameField) return (
            <React.Fragment>
                <td>
                    <input ref={updateNameRef} id={`${props.item.id}-name`} type='text' onChange={inputName} placeholder={props.item.name}/>
                    <button onClick={saveName}>Save</button>
                </td>
            </React.Fragment>
        )
        else return (
            <React.Fragment>
                <td id={props.item.id} onClick={showNameField}>{props.item.name}</td>
            </React.Fragment>
        )
    }

    const tdVal = () => {
        if (valField) return (
            <React.Fragment>
                <td>
                    <input ref={updateValRef} id={`${props.item.id}-val`} type='text' onChange={inputVal} placeholder={props.item.val}/>
                    <button onClick={saveVal}>Save</button>
                </td>
            </React.Fragment>
        )
        else return <td id={props.item.id} onClick={showValField}>{props.item.val}</td>;
    }


    return (
        <React.Fragment>
            <td></td>
            {tdName()}
            {tdVal()}
            <button id={props.item.id} onClick={props.deleteItem}>Delete</button>
        </React.Fragment>
    )
}

//             <button onClick={input ? save : editMode}>{input ? 'Save' : 'Edit'}</button>
