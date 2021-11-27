import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


test('check is App renders', () => {
    render(<App />)
    const linkElement = screen.getByText(/Spaceship configurator/i);
    expect(linkElement).toBeInTheDocument();
});
test('check is Color renders', () => {
    render(<App />)
    const linkElement = screen.getByText(/Snow/i);
    expect(linkElement).toBeInTheDocument();
});
test('check is Power renders', () => {
    render(<App />)
    const linkElement = screen.getByText(/100 MW/i);
    expect(linkElement).toBeInTheDocument();
});
test('check is Warp renders', () => {
    render(<App />)
    const linkElement = screen.getByText(/YES/i);
    expect(linkElement).toBeInTheDocument();
});
test('check is Package renders', () => {
    render(<App />)
    const linkElement = screen.getByText(/Basic/i);
    expect(linkElement).toBeInTheDocument();
});

