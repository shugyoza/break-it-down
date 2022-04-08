import React from 'react';
import App from '../App';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('App title renders with correct text', () => {
    const component = render(<App />);
    const dataTestID = 'app-title';
    const expected = 'Itemize';
    const appTitle = component.getByTestId(dataTestID);
    expect(appTitle.textContent).toBe(expected);
});

test('Print title renders with correct text', () => {
    const component = render(<App />);
    const dataTestID = 'print-title';
    const expected = 'INVOICE';
    const appTitle = component.getByTestId(dataTestID);
    expect(appTitle.textContent).toBe(expected);

})
