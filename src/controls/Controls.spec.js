import React from 'react';
import Controls from './Controls';
import { render, fireEvent } from "@testing-library/react";

test('renders the Controls', () => {
    render(<Controls/>)
})

test('provides buttons to toggle states', () => {
    const { getByText } = render(<Controls/>);

    const closeGate = getByText(/close Gate/i);//
    const lockGate = getByText(/lock Gate/i);

    expect(closeGate).toBeTruthy()//
    expect(lockGate).toBeTruthy()
})

test('on click changes button text', () => {
    const locked = false;
    const closed = false;
    const toggleClose = jest.fn();

    const {getByText} = render(<Controls locked={locked} closed={closed}/>);
    

})