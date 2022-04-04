import React, {useState, useRef, useEffect} from 'react';

export default function From({sender, setSender}) {

    const lineDefault = '';
    const [line1, setLine1] = useState(lineDefault);
    const [line2, setLine2] = useState(lineDefault);
    const [line3, setLine3] = useState(lineDefault);
    const [line4, setLine4] = useState(lineDefault);
    const [line5, setLine5] = useState(lineDefault);
    const [line6, setLine6] = useState(lineDefault);

    const editableDefault = true;
    const [editable1, setEditable1] = useState(editableDefault);
    const [editable2, setEditable2] = useState(editableDefault);
    const [editable3, setEditable3] = useState(editableDefault);
    const [editable4, setEditable4] = useState(editableDefault);
    const [editable5, setEditable5] = useState(editableDefault);
    const [editable6, setEditable6] = useState(editableDefault);

    const [alpha1, setAlpha1] = useState(line1);
    const [alpha2, setAlpha2] = useState(line2);
    const [alpha3, setAlpha3] = useState(line3);
    const [alpha4, setAlpha4] = useState(line4);
    const [alpha5, setAlpha5] = useState(line5);
    const [alpha6, setAlpha6] = useState(line6);

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

    const input1 = (e) => setAlpha1(e.target.value);
    const input2 = (e) => setAlpha2(e.target.value);
    const input3 = (e) => setAlpha3(e.target.value);
    const input4 = (e) => setAlpha4(e.target.value);
    const input5 = (e) => setAlpha5(e.target.value);
    const input6 = (e) => setAlpha6(e.target.value);


    // save whatever typed in the input field for name into database
    const saveInput = (e) => {
        const n = e.target.id[e.target.id.length - 1];
        if (n === '1') {
            setLine1(alpha1);
            setEditable1((prevEditable) => !prevEditable);
            setAlpha1(line1);
            setSender((prevSender) => {
                const newSender = JSON.parse(JSON.stringify(prevSender));
                const newLine = {text: alpha1, editable: editable1};
                newSender[n - 0 - 1] = newLine;
                return newSender;
            });
            return;
        }
        else if (n === '2') {
            setLine2(alpha2);
            setEditable2((prevEditable) => !prevEditable);
            setAlpha2(line2);
            setSender((prevSender) => {
                const newSender = JSON.parse(JSON.stringify(prevSender));
                const newLine = {text: alpha2, editable: editable2};
                newSender[n - 0 - 1] = newLine;
                return newSender;
            });
            return;
        }
        else if (n === '3') {
            setLine3(alpha3);
            setEditable3((prevEditable) => !prevEditable);
            setAlpha3(line3);
            setSender((prevSender) => {
                const newSender = JSON.parse(JSON.stringify(prevSender));
                const newLine = {text: alpha3, editable: editable3};
                newSender[n - 0 - 1] = newLine;
                return newSender;
            });
            return;
        }
        else if (n === '4') {
            setLine4(alpha4);
            setEditable4((prevEditable) => !prevEditable);
            setAlpha4(line4);
            setSender((prevSender) => {
                const newSender = JSON.parse(JSON.stringify(prevSender));
                const newLine = {text: alpha4, editable: editable4};
                newSender[n - 0 - 1] = newLine;
                return newSender;
            });
            return;
        }
        else if (n === '5') {
            setLine5(alpha5);
            setEditable5((prevEditable) => !prevEditable);
            setAlpha5(line5);
            setSender((prevSender) => {
                const newSender = JSON.parse(JSON.stringify(prevSender));
                const newLine = {text: alpha5, editable: editable5};
                newSender[n - 0 - 1] = newLine;
                return newSender;
            });
            return;
        }
        else if (n === '6') {
            setLine6(alpha6);
            setEditable6((prevEditable) => !prevEditable);
            setAlpha6(line6);
            setSender((prevSender) => {
                const newSender = JSON.parse(JSON.stringify(prevSender));
                const newLine = {text: alpha6, editable: editable6};
                newSender[n - 0 - 1] = newLine;
                return newSender;
            });
            return;
        }
        return;

        // // if the user submitted a blank input field for the name, do nothing
        // if (!updateNameRef.current.value.length) return;
        // // grab the value from the input field
        // const newName = updateNameRef.current.value;
        // // change the state for name
        // // create a deep copy of item
        // const newItem = JSON.parse(JSON.stringify(item));
        // // change the name.text value into newName
        // newItem.name.text = newName;
        // // revert the element into a regular element (not an input field)
        // setNameField(false);
        // // change the name's editable state back to false
        // newItem.name.editable = false;
        // // create a deep copy of items;
        // const newItems = JSON.parse(JSON.stringify(items));
        // // reassign the item object at that index with this newItem we created
        // newItems[idx] = newItem;
        // // save the modified items into the state
        // setItems(newItems);
        // // reset the input field value
        // setAlphaName(newName);
    }

    const update = (e) => {
        const n = e.target.id[e.target.id.length - 1];
        if (n === '1') return setEditable1((prevEditable) => !prevEditable);
        else if (n === '2') return setEditable2((prevEditable) => !prevEditable);
        else if (n === '3') return setEditable3((prevEditable) => !prevEditable);
        else if (n === '4') return setEditable4((prevEditable) => !prevEditable);
        else if (n === '5') return setEditable5((prevEditable) => !prevEditable);
        else if (n === '6') return setEditable6((prevEditable) => !prevEditable);
        return;
    }

    return (
    <section className='from'><h2 className='noprint'>Sender's Details</h2>
        <div className='noprint'></div>
        <div className='label-input tr'>
            <label className='noprint' htmlFor='field-1'>{label1}:</label>
            {!editable1 ?
                (<button id='btn-1' onClick={update}>{line1}</button>) :
                (<div className='tr'>
                    <input id='field-1' name='field-1' className='value' ref={field1Ref} onChange={input1} type='text' placeholder={placeholder1} />
                    {alpha1 ? <button id='save-field-1' className='btn-save' onClick={saveInput} >Save</button> : null}
                </div>
                )
            }
        </div>
        <div className='label-input tr'>
            <label className='noprint' htmlFor='field-2'>{label2}:</label>
            {!editable2 ?
                (<button id='btn-2' onClick={update}>{line2}</button>) :
                (<div className='tr'>
                    <input id='field-2' name='field-2' className='value' ref={field2Ref} onChange={input2} type='text' placeholder={placeholder2} />
                    {alpha2 ? <button id='save-field-2' className='btn-save' onClick={saveInput} >Save</button> : null}
                </div>
                )
            }
        </div>
        <div className='label-input tr'>
            <label className='noprint' htmlFor='field-3'>{label3}:</label>
            {!editable3 ?
                (<button id='btn-3' onClick={update}>{line3}</button>) :
                (<div className='tr'>
                    <input id='field-3' name='field-3' className='value' ref={field3Ref} onChange={input3} type='text' placeholder={placeholder3} />
                    {alpha3 ? <button id='save-field-3' className='btn-save' onClick={saveInput} >Save</button> : null}
                </div>
                )
            }
        </div>
        <div className='label-input tr'>
            <label className='noprint' htmlFor='field-4'>{label4}:</label>
            {!editable4 ?
                (<button id='btn-4' onClick={update}>{line4}</button>) :
                (<div className='tr'>
                    <input id='field-4' name='field-4' className='value' ref={field4Ref} onChange={input4} type='text' placeholder={placeholder4} />
                    {alpha4 ? <button id='save-field-4' className='btn-save' onClick={saveInput} >Save</button> : null}
                </div>
                )
            }
        </div>
        <div className='label-input tr'>
            <label className='noprint' htmlFor='field-5'>{label5}:</label>
            {!editable5 ?
                (<button id='btn-5' onClick={update}>{line5}</button>) :
                (<div className='tr'>
                    <input id='field-5' name='field-5' className='value' ref={field5Ref} onChange={input5} type='text' placeholder={placeholder5} />
                    {alpha5 ? <button id='save-field-5' className='btn-save' onClick={saveInput} >Save</button> : null}
                </div>
                )
            }
        </div>
        <div className='label-input tr'>
            <label className='noprint' htmlFor='field-6'>{label6}:</label>
            {!editable6 ?
                (<button id='btn-6' onClick={update}>{line6}</button>) :
                (<div className='tr'>
                    <input id='field-6' name='field-6' className='value' ref={field6Ref} onChange={input6} type='text' placeholder={placeholder6} />
                    {alpha6 ? <button id='save-field-6' className='btn-save' onClick={saveInput} >Save</button> : null}
                </div>
                )
            }
        </div>
    </section>
  )}
