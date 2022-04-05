import React from 'react';
import BuyerField from './BuyerField';

export default function Buyer({buyer, setBuyer}) {

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
        '3': 'Address',
        '4': 'Address',
        '5': 'Phone',
        '6': 'Email'
    }

    return (
        <section className='buyer'>
            <h2 className='noprint'>
                Buyer
            </h2>
            {buyer.map((line, idx) => <BuyerField key={`buyer-line-${idx}`} idx={idx} placeholder={placeholder} label={label} text={line} buyer={buyer} setBuyer={setBuyer} />)}
        </section>
    )
}
