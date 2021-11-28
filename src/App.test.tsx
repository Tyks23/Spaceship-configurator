import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
import OptionColor from "./components/OptionColor";

//SWITCHED TO CYPRESS SO ALL OF THIS IS REDUNDANT
//CHECK ../cypress/integration/Test.js  FOR TESTS



describe("UI testing", () => {
    test('check is App renders', () => {
        render(<App />)
        const textElement = screen.getByText(/Spaceship configurator/i);
        expect(textElement).toBeInTheDocument();
    });
    test('check is Color renders', () => {
        render(<App />)
        const textElement = screen.getByText(/Snow/i);
        expect(textElement).toBeInTheDocument();
    });
    test('check is Power renders', () => {
        render(<App />)
        const textElement = screen.getByText(/100 MW/i);
        expect(textElement).toBeInTheDocument();
    });
    test('check is Warp renders', () => {
        render(<App />)
        const textElement = screen.getByText(/YES/i);
        expect(textElement).toBeInTheDocument();
    });
    test('check is Package renders', () => {
        render(<App />)
        const textElement = screen.getByText(/Basic/i);
        expect(textElement).toBeInTheDocument();
    });
    test('confirm Color selection', async () => {
        const t = jest.fn()
        render(<OptionColor
            key={`${0}-${0}`}
            active={true}
            color={"#FFFFFF"}
            name={"Snow"}
            price={0}
            onClick={() => { t() }}
        />)
        const clickable = (await screen.getByText(/Snow/i));
        fireEvent.click(clickable)
        expect(t).toHaveBeenCalled();
    })
})



