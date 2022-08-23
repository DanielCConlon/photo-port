import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    // baseline test
    it('renders', () => {
        render(<Contact/>);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Contact/>);

        expect(asFragment('h1tag')).toMatchSnapshot()
    });
})

describe('contact form is rendering', () => {
    it('renders', () => {
        const { getByTestId } = render(<Contact/>);

        expect(getByTestId('h1tag')).toHaveTextContent("Contact Me");
        expect(getByTestId('buttontag')).toHaveTextContent("Submit");
    });
})