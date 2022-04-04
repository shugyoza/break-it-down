import React, {useState, useRef} from 'react';

export default function From(props) {

    const [line1, setLine1] = useState('');
    const [line2, setLine2] = useState('');
    const [line3, setLine3] = useState('');
    const [line4, setLine4] = useState('');
    const [line5, setLine5] = useState('');
    const [line6, setLine6] = useState('');

    const [editable1, setEditable1] = useState(false);
    const [editable2, setEditable2] = useState(false);
    const [editable3, setEditable3] = useState(false);
    const [editable4, setEditable4] = useState(false);
    const [editable5, setEditable5] = useState(false);
    const [editable6, setEditable6] = useState(false);

    const field1Ref = useRef();
    const field2Ref = useRef();
    const field3Ref = useRef();
    const field4Ref = useRef();
    const field5Ref = useRef();
    const field6Ref = useRef();

    const label1 = 'Field 1';
    const label2 = 'Field 2';
    const label3 = 'Field 3';
    const label4 = 'Field 4';
    const label5 = 'Field 5';
    const label6 = 'Field 6';

    const placeholder1 = 'e.g. Jane Doe, LLC.';
    const placeholder2 = 'e.g. Lic.# 12345';
    const placeholder3 = 'e.g. 888 8th Street, Ste. 8';
    const placeholder4 = 'e.g. Hacienda Height, 88888';
    const placeholder5 = 'e.g. (888) 888-8888';
    const placeholder6 = 'e.g. eight@email.com';



    function addItem(e) {
        const inputLine1 = field1Ref.current.value;
        const inputLine2 = field2Ref.current.value;
        const inputLine3 = field3Ref.current.value;
        const inputLine4 = field4Ref.current.value;
        const inputLine5 = field5Ref.current.value;
        const inputLine6 = field6Ref.current.value;

        if (inputLine1 === '' || inputLine2 === '' || inputLine3 === '') return;
        // setItems((prevItems) => [...prevItems, {id: newID, name: {text: inputName, editable: false}, val: {text: inputVal, editable: false}}])
        // setTotal((prevTotal) => prevTotal - 0 + (inputVal - 0))
        // itemNameRef.current.value = itemValRef.current.value = null;
    }

    return (
    <section className='from'><h2 className='noprint'>Sender's Details</h2>
        <div className='noprint'></div>
        <div className='label-input tr'>
            <label className='noprint' for='field-1'>{label1}:</label>
            <input id='field-1' name='name' className='value' ref={field1Ref} type='text' placeholder={placeholder1} />
        </div>
        <div className='label-input tr'>
            <label className='noprint' for='field-2'>{label2}:</label>
            <input id='field-2' className='value' ref={field2Ref} type='text' placeholder={placeholder2}/>
        </div>
        <div className='label-input tr'>
            <label className='noprint' for='field-3'>{label3}:</label>
            <input id='field-3' className='value' ref={field3Ref} type='text' placeholder={placeholder3}/>
        </div>
        <div className='label-input tr'>
            <label className='noprint' for='field-4'>{label4}:</label>
            <input id='field-4' className='value' ref={field4Ref} type='text' placeholder={placeholder4}/>
        </div>
        <div className='label-input tr'>
            <label className='noprint' for='field-5'>{label5}:</label>
            <input id='field-5' className='value' ref={field5Ref} type='text' placeholder={placeholder5}/>
        </div>
        <div className='label-input tr'>
            <label className='noprint' for='field-6'>{label6}:</label>
            <input id='field-6' className='value' ref={field6Ref} type='text' placeholder={placeholder6}/>
        </div>
        <div className='noprint'>
            <button className='noprint add-item' onClick={addItem}>Save Input</button>
        </div>
    </section>
  )}
