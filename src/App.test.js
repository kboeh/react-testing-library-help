/*
Hi! Need help with React Testing Library? The best way to get it is by forking
this repository, making a reproduction of your issue (or showing what you're
trying to do), and posting a link to your fork on our Discord chat:

https://testing-library.com/discord
*/

// here's an example
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
