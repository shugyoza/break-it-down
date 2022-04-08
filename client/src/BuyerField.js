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
         <div className='info tr'>
            <label className='noprint field-label' htmlFor={`field-${idx + 1}`}>{label[idx + 1]}:</label>
            {text.length ?
                (<div className='tr'>
                    <button id={`buyer-btn-${idx + 1}`} className='field-data' onClick={() => update(text)}>{text.length ? text : null}</button>
                </div>) :
                (<div className='tr noprint'>
                    <input id={`buyer-input-${idx + 1}`} name={`field-${idx + 1}`} className='field-input' ref={fieldRef} onChange={input} type='text' value={alpha.length ? alpha : ''} placeholder={placeholder[`${idx + 1}`]} />
                    <button id={`save-buyer-input-${idx + 1}`} className='btn-save' onClick={() => saveInput(idx)} >Save</button>
                </div>
                )
            }
        </div>
    )
}
