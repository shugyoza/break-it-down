import React, {useState, useRef} from 'react';

export default function Note({note, setNote}) {

    const [editableNote, setEditableNote] = useState(false);
    const [alphaNote, setAlphaNote] = useState(note[0]);

    const fieldNoteRef = useRef();

    const editNote = (e) => {
        setEditableNote(true);
        return;
    }

    const inputNote = (e) => setAlphaNote(e.target.value);

    const saveNote = (e) => {
        const newNote = fieldNoteRef.current.value;
        setNote(newNote);
        setEditableNote(false);
        setAlphaNote(newNote);
        return;
    }

    return (
        <section className='note'>
            <h2 className='noprint'>Note</h2>
            <fieldset>
                <div className='note-row tr'>
                    <label className='field-label' htmlFor={`inv-note`}>Note: </label>
                    {note.length && !editableNote ?
                        (
                            <React.Fragment>
                                <button onClick={editNote} className='field-data'>{note.length ? note : ``}</button>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <input className='field-input' ref={fieldNoteRef} onClick={editNote} onChange={inputNote} type='text' value={alphaNote} />
                                <button className='btn-save noprint' onClick={saveNote} >Save</button>
                            </React.Fragment>
                        )
                    }
                </div>
            </fieldset>
        </section>
    )
}
