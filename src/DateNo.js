import React, {useState, useRef} from 'react';

export default function DateNo({dateNo, setDateNo}) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const autoDate = new Date();
    const [m, d, y] = [autoDate.getMonth(), autoDate.getDate(), autoDate.getFullYear()];
    const autoDateStr = `${months[m]} ${d}, ${y} `;

    const [date, setDate] = useState(dateNo[0]);
    const [alphaDate, setAlphaDate] = useState(autoDateStr);
    const [editableDate, setEditableDate] = useState(false);

    const [num, setNum] = useState(dateNo[1]);
    const [alphaNum, setAlphaNum] = useState('');
    const [editableNum, setEditableNum] = useState(false);

    const fieldDateRef = useRef();
    const fieldNumRef = useRef();

    /* Not used
    const today = () => {
        setDate(autoDateStr);
        setEditableDate(false);
        setAlphaDate(autoDateStr);
        saveDate();
        setDateNo((prev) => {
            const newDateNo = [...prev];
            newDateNo[0] = autoDateStr;
            return newDateNo;
        })
        return;
    } */

    const autoNum = () => {
        setNum(`${Date.now()}`);
        setEditableNum(false);
        setAlphaNum(`${Date.now()}`);
        setDateNo((prev) => {
            const newDateNo = [...prev];
            newDateNo[1] = `${Date.now()}`;
            return newDateNo;
        })
        return;
    }

    const editDate = (e) => {
        setEditableDate(true);
        return;
    }

    const editNum = (e) => {
        setEditableNum(true);
        return;
    }

    const inputDate = (e) => setAlphaDate(e.target.value);
    const inputNum = (e) => setAlphaNum(e.target.value);

    const saveDate = (e) => {
        const newDate = fieldDateRef.current.value;
        setDate(newDate);
        setEditableDate(false);
        setDateNo((prev) => {
            const newDateNo = [...prev];
            newDateNo[0] = newDate;
            return newDateNo;
        })
        return;
    }

    const saveNum = (e) => {
        const newNum = fieldNumRef.current.value;
        setNum(newNum);
        setEditableNum(false);
        setDateNo((prev) => {
            const newDateNo = [...prev];
            newDateNo[1] = newNum;
            return newDateNo;
        })
        return;
    }

    return (
        <section className='date-no'>
            <h2 className='noprint'>Date + Number</h2>
            <fieldset>
                <div className='date-row tr'>
                    <label className='field-label' htmlFor={`inv-date`}>Date: </label>
                    {date.length && !editableDate ?
                        (
                            <React.Fragment>
                                <button onClick={editDate} className='field-data'>{date.length ? date : `${months[m]} ${d}, ${y} `}</button>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <input className='field-input' ref={fieldDateRef} onClick={editDate} onChange={inputDate} type='text' value={alphaDate} />
                                <button className='btn-save noprint' onClick={saveDate} >Save</button>
                            </React.Fragment>
                        )
                    }
                </div>
                <div className='num-row tr'>
                    <label className='field-label' htmlFor={`inv-num`}>Inv.#: </label>
                    {num.length && !editableNum ?
                        (
                            <React.Fragment>
                                <button onClick={editNum} className='field-data'>{num.length ? num : ``}</button>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <input className='field-input' ref={fieldNumRef} onClick={editNum} onChange={inputNum} type='text' value={alphaNum} />
                                <button className='btn-save noprint' onClick={autoNum}>Auto</button>
                                <button className='btn-save noprint' onClick={saveNum} >Save</button>
                            </React.Fragment>
                        )
                    }
                </div>
            </fieldset>
        </section>
    )
}
