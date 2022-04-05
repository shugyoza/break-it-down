import React, {useState, useRef} from 'react';

export default function Field({sender, setSender, placeholder, idx, text, bool}) {

    const [editable, setEditable] = useState(bool);
    const [alpha, setAlpha] = useState('');
    const fieldRef = useRef();
    const label = `# ${idx + 1}`;

    const input = (e) => setAlpha(e.target.value);

    const saveInput = (idx, e) => {
        const newInput = fieldRef.current.value;
        setAlpha(newInput);
        setSender((prevSender) => {
            const newSender = JSON.parse(JSON.stringify(prevSender));
            const newLine = {text: newInput, editable: false};
            newSender[idx] = newLine;
            return newSender;
        });
        setEditable(false);
        return;
    }

    // save whatever typed in the input field for name into database
    const update = (text, e) => {
        setEditable(true);
        setAlpha(text);
        setSender((prevSender) => {
            const newSender = JSON.parse(JSON.stringify(prevSender));
            newSender[idx].editable = true;
            return newSender;
        });
        return;
    }

    return (
         <div className='label-input tr'>
            <label className='noprint' htmlFor={`field-${idx + 1}`}>{label}:</label>
            {!editable ?
                (<button id={`btn-${idx + 1}`} className='btn-data' onClick={() => update(text)}>{text}</button>) :
                (<div className='tr noprint'>
                    <input id={`field-${idx + 1}`} name={`field-${idx + 1}`} className='value' ref={fieldRef} onChange={input} type='text' value={alpha} placeholder={placeholder[`${idx + 1}`]} />
                    {alpha ? <button id={`save-field-${idx + 1}`} className='btn-save' onClick={() => saveInput(idx)} >Save</button> : null}
                </div>
                )
            }
        </div>
    )
}
