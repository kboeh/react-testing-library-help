import React from 'react'
import '@testing-library/jest-dom'
import {render, screen, fireEvent} from '@testing-library/react'

import App from './App'

test("render health parameter when checkbox selected", () => {
  render(<App />) 
  
  // target checkbox & click
  const check = screen.getByText('dairy-free');
  fireEvent.click(check);
  
  expect(screen.getByText('&health=dairy-free')).toBeInTheDocument()
});
