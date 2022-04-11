import React from 'react';
import {render} from 'react-dom';

import App from '../App';
import DateNo from '../DateNo';
import SellerField from '../SellerField';
import BuyerField from '../BuyerField';
import Seller from '../Seller';
import Buyer from '../Buyer';
import Item from '../Item';
import ItemList from '../ItemList';
import { showPennies } from '../utils';

const item1 = {
    id: '1',
    name: {text: 'Uber to San Francisco', editable: false},
    val: {text: 500, editable: false}
}

const initState = {
    dateNo: ['', ''],
    seller: [''],
    buyer: [''],
    items: [item1],
    total: 0,
    note: ''
};

const html = {
    div: document.createElement('div'),
    section: document.createElement('section'),
};

const placeholder = {
    '1': 'e.g. Jane Doe, LLC.',
    '2': 'e.g. Lic.# 12345',
    '3': 'e.g. 888 8th Street, Ste. 8',
    '4': 'e.g. Hacienda Height, 88888',
    '5': 'e.g. (888) 888-8888',
    '6': 'e.g. eight@email.com'
};

const label = {
    '1': 'Name',
    '2': 'Extra',
    '3': 'Address',
    '4': 'Address',
    '5': 'Phone',
    '6': 'Email'
};

let i = 0;
let ikey = i + 1;

it('renders App component without crashing', () => {
    render(<App />, html.div);
});

it('render DateNo component initially without crashing', () => {
    render(<DateNo dateNo={initState.dateNo} />, html.div)
});

it('render SellerField component initially without crashing', () => {
    render(<SellerField seller={initState.seller} idx={i} placeholder={placeholder[ikey]} label={label[ikey]} text={placeholder[ikey]}/>, html.section)
});

it('render BuyerField component initially without crashing', () => {
    render(<BuyerField buyer={initState.buyer} idx={i} placeholder={placeholder[ikey]} label={label[ikey]} text={placeholder[ikey]}/>, html.section)
});

it('render Seller component initially without crashing', () => {
    render(<Seller seller={initState.seller} />, html.section)
});

it('render Buyer component initially without crashing', () => {
    render(<Buyer buyer={initState.buyer} />, html.section)
});

it('render Item component initially without crashing', () => {
    render(<Item items={initState.items} idx={i} item={initState.items[i]} total={initState.total} showPennies={showPennies} />, html.section)
});

it('render ItemList component initially without crashing', () => {
    render(<ItemList items={initState.items} idx={i} item={initState.items[i]} total={initState.total} showPennies={showPennies} />, html.section)
});
