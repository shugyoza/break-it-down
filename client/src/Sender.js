import React, {useState, useRef} from 'react';
import Field from './Field';

export default function Sender({sender, setSender}) {

    const placeholder = {
        '1': 'e.g. Jane Doe, LLC.',
        '2': 'e.g. Lic.# 12345',
        '3': 'e.g. 888 8th Street, Ste. 8',
        '4': 'e.g. Hacienda Height, 88888',
        '5': 'e.g. (888) 888-8888',
        '6': 'e.g. eight@email.com'
    }

    const label = {
        '1': 'Name',
        '2': 'Extra',
        '3': 'Address1',
        '4': 'Address2',
        '5': 'Phone',
        '6': 'Email'
    }

    return (
        <section className='sender'>
            <h2 className='noprint'>
                Sender
            </h2>
            {sender.map((line, idx) => <Field idx={idx} placeholder={placeholder} label={label} text={line} sender={sender} setSender={setSender} />)}
        </section>
    )
}
