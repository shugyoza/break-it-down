import React, {useState, useRef} from 'react';

export default function BuyerField({buyer, setBuyer, placeholder, idx, text, label}) {

    const [editable, setEditable] = useState(true);
    const [alpha, setAlpha] = useState('');
    const fieldRef = useRef();

    const input = (e) => setAlpha(e.target.value);

    const saveInput = (idx, e) => {
        const newInput = fieldRef.current.value;
        setAlpha(newInput);
        setBuyer((prevBuyer) => {
            const newBuyer = JSON.parse(JSON.stringify(prevBuyer));
            newBuyer[idx] = newInput;
            return newBuyer;
        });
        setEditable(false);
        return;
    }

    // save whatever typed in the input field for name into database
    const update = (text, e) => {
        setEditable(true);
        setAlpha(text);
        setBuyer((prevBuyer) => {
            const newBuyer = JSON.parse(JSON.stringify(prevBuyer));
            return newBuyer;
        });
        return;
    }

    return (
         <div className='label-input tr'>
            <label className='noprint' htmlFor={`field-${idx + 1}`}>{label[idx + 1]}:</label>
            {text.length ?
                (<div className='tr'>
                    <button id={`btn-${idx + 1}`} className='btn-data' onClick={() => update(text)}>{text}</button>
                </div>) :
                (<div className='tr noprint'>
                    <input id={`field-${idx + 1}`} name={`field-${idx + 1}`} className='value' ref={fieldRef} onChange={input} type='text' value={alpha} placeholder={placeholder[`${idx + 1}`]} />
                    <button id={`save-field-${idx + 1}`} className='btn-save' onClick={() => saveInput(idx)} >Save</button>
                </div>
                )
            }
        </div>
    )
}
