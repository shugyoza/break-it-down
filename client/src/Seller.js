import React from 'react';
import SellerField from './SellerField';

export default function Seller({seller, setSeller}) {

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
        <section className='seller'>
            <h2 className='noprint'>
                Seller
            </h2>
            {seller.map((line, idx) => <SellerField key={`seller-line-${idx}`} idx={idx} placeholder={placeholder} label={label} text={line} seller={seller} setSeller={setSeller} />)}
        </section>
    )
}
