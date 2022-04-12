import React, {useState, useRef} from 'react';

export default function SellerField({seller, setSeller, placeholder, idx, text, label}) {

    const [editable, setEditable] = useState(false);
    const [alpha, setAlpha] = useState('');
    const fieldRef = useRef();

    const input = (e) => setAlpha(e.target.value);

    const saveInput = (idx, e) => {
        const newInput = fieldRef.current.value;
        setAlpha(newInput);
        setSeller((prevSeller) => {
            const newSeller = JSON.parse(JSON.stringify(prevSeller));
            newSeller[idx] = newInput;
            return newSeller;
        });
        setEditable(false);
        return;
    }

    // save whatever typed in the input field for name into database
    const update = (text, e) => {
        setEditable(true);
        setAlpha(text);
        setSeller((prevSeller) => {
            const newSeller = JSON.parse(JSON.stringify(prevSeller));
            return newSeller;
        });
        return;
    }

    return (
         <div className='info tr'>
            <label className='noprint field-label' htmlFor={`field-${idx + 1}`}>{label[idx + 1]}:</label>
            {text.length && !editable ?
                (<div className='tr'>
                    <button id={`btn-${idx + 1}`} className='field-data' onClick={() => update(text)}>{text}</button>
                </div>) :
                (<div className='tr noprint'>
                    <input id={`field-${idx + 1}`} name={`field-${idx + 1}`} className='field-input' ref={fieldRef} onChange={input} type='text' value={alpha} placeholder={placeholder[`${idx + 1}`]} />
                    <button id={`save-field-${idx + 1}`} className='btn-save' onClick={() => saveInput(idx)} >Save</button>
                </div>
                )
            }
        </div>
    )
}
