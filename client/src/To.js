import React, {useState, useRef} from 'react';

export default function To(props) {

    const [line1, setLine1] = useState('');
    const [line2, setLine2] = useState('');
    const [line3, setLine3] = useState('');
    const [line4, setLine4] = useState('');
    const [line5, setLine5] = useState('');
    const [editable1, setEditable1] = useState(false);
    const [editable2, setEditable2] = useState(false);
    const [editable3, setEditable3] = useState(false);
    const [editable4, setEditable4] = useState(false);
    const [editable5, setEditable5] = useState(false);


    const field1Ref = useRef();
    const field2Ref = useRef();
    const field3Ref = useRef();
    const field4Ref = useRef();
    const field5Ref = useRef();
    const field6Ref = useRef();


    function addItem(e) {
        const inputLine1 = field1Ref.current.value;
        const inputLine2 = field2Ref.current.value;
        const inputLine3 = field3Ref.current.value;
        const inputLine4 = field4Ref.current.value;
        const inputLine5 = field5Ref.current.value;
        const inputLine6 = field6Ref.current.value;

        if (inputLine1 === '' || inputLine2 === '' || inputLine3 === '') return;
        setLine1(inputLine1);
        setLine2(inputLine2);
        setLine3(inputLine3);
        setLine4(inputLine4);
        setLine5(inputLine5);
        setLine6(inputLine6);
        // itemNameRef.current.value = itemValRef.current.value = null;
    }

    return (
    <section className='from'><h2>Sender's Details</h2>
        <div className='noprint'></div>
        <div className='noprint label-input'>
            <label>Name: </label>
            <input name='name' className='value' ref={field1Ref} type='text' placeholder="Sender's Name" />
        </div>
        <div className='noprint label-input'>
            <label>Description:</label>
            <input className='value' ref={field2Ref} type='text' placeholder='Additional Detail'/>
        </div>
        <div className='noprint label-input'>
            <label>Address1:</label>
            <input className='value' ref={field3Ref} type='text' placeholder="Sender's Address 1"/>
        </div>
        <div className='noprint label-input'>
            <label>Address2:</label>
            <input className='value' ref={field4Ref} type='text' placeholder="Sender's Address 2"/>
        </div>
        <div className='noprint label-input'>
            <label>Phone/Email:</label>
            <input className='value' ref={field5Ref} type='text' placeholder="Sender's Phone"/>
        </div>
        <div className='noprint label-input'>
            <label>Phone/Email:</label>
            <input className='value' ref={field6Ref} type='text' placeholder="Sender's Email"/>
        </div>
        <div className='noprint'>
            <button className='noprint add-item' onClick={addItem}>Save Input</button>
        </div>
    </section>
  )}
