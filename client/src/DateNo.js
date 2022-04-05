import React from 'react';

export default function DateNo() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const date = new Date();
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];

    return (
        <section className='date-no'>
            <div className='date-row'>
                <span>Invoice Date:</span>{`${months[month]} ${day} ${year}`}
            </div>
            <div className='invoice-no-row'>
                <span>Invoice #: </span>
            </div>
        </section>
    )
}
