import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe("Tests for header", () =>{
    test('render title in header', () => {
        const { getByText } = render(<Header />);
        const title = getByText("Pokemon Project");
        expect(title).toBeInTheDocument();
    });
    test('render nav links in header', () => {
        const { getByText } = render(<Header />);
        const home = getByText("Home");
        const about = getByText("About");
        expect(home).toBeInTheDocument();
        expect(about).toBeInTheDocument();
    });
    test('render search bar in header', () => {
        const { getByText } = render(<Header />);
        const search = getByText("Search");
        expect(search).toBeInTheDocument();
    });
})
