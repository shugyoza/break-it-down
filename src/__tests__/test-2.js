import React from 'react';
import App from '../App';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ItemAdd from '../ItemAdd';

test('App title renders with correct text', () => {
    const component = render(<App />);
    const dataTestID = 'app-title';
    const expected = 'Itemize';
    const appTitle = component.getByTestId(dataTestID);
    expect(appTitle.textContent).toBe(expected);
});

test('Print title renders with correct text', () => {
    const {getByTestId} = render(<App />);
    const dataTestID = 'print-title';
    const expected = 'INVOICE';
    const appTitle = getByTestId(dataTestID);
    expect(appTitle.textContent).toBe(expected);
})
/*
test('Button item-value renders the $ value of that item', () => {
    const {getByTestId} = render(<App />);
    const dataTestID = 'item-value';
    const expected = '0';
    const itemValue = getByTestId(dataTestID);
    expect(itemValue.textContent).toBe(expected);
}) */

test('change value of detail field works correctly', () => {
    const {getByTestId} = render(<ItemAdd items={[]} total={0}/>);
    const inputEl = getByTestId('input-add-detail');

    expect(inputEl.value).toBe('');

    fireEvent.change(inputEl, {
        target: {
            value: 'Uber from Concord to San Jose'
        }
    });

    expect(inputEl.value).toBe('Uber from Concord to San Jose');
})


test('change value of $ value field works correctly', () => {
    const {getByTestId} = render(<ItemAdd items={[]} total={0}/>);
    const inputEl = getByTestId('input-add-value');

    expect(inputEl.value).toBe('');

    fireEvent.change(inputEl, {
        target: {
            value: '55'
        }
    });

    expect(inputEl.value).toBe('55');
})
