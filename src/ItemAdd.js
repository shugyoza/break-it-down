import React, {useRef} from 'react';

export default function ItemAdd({setItems, setTotal}) {

    const itemNameRef = useRef();
    const itemValRef = useRef();

    // useEffect(() => {
    //     itemNameRef.current.focus();
    // }, [])

    function addItem(e) {
        const newID = `${Date.now()}`;
        const inputName = itemNameRef.current.value;
        const inputVal = itemValRef.current.value;
        const dollarX100 = Math.floor((inputVal - 0) * 100);

        if (inputName === '' || inputVal === '') return;
        setItems((prevItems) => [...prevItems, {id: newID, name: {text: inputName, editable: false}, val: {text: dollarX100, editable: false}}]);

        setTotal((prevTotal) => {
            const prevTotalX100 = Math.floor(prevTotal - 0);
            const newTotalX100 = prevTotalX100 + dollarX100;
            return newTotalX100;
        });
        itemNameRef.current.value = itemValRef.current.value = null;

        // when addItem clicked, the list render the created additional item, and put the cursor in the referred element
        // this is great feature for quick data entry only with keyboard!
        itemNameRef.current.focus();
    }

    return (
    <div className='tr add-item noprint'>
        <div className='td seq noprint'>+</div>
        <div className='td col-1 noprint'><input data-testid='input-add-detail' name='add-detail-field' className='table-input' ref={itemNameRef} type='text' placeholder='detail' /></div>
        <div className='td col-2 noprint'><input data-testid='input-add-value' name='add-value-field' className='table-input' ref={itemValRef} type='text' placeholder='$ value'/></div>
        <div className='td col-btn noprint'><button className='noprint btn-save' onClick={addItem}>Save</button></div>
    </div>
  )
}
