import { render, screen } from '@testing-library/react'; // Import necessary functions from testing-library
import App from './App'; // Import the component to be tested

// Define a test case using the test function from Jest
test('renders learn react link', () => {
  render(<App />); // Render the App component within a test environment

  // Use screen.getByText to find an element containing the text "learn react" (case insensitive)
  const linkElement = screen.getByText(/learn react/i);

  // Assert that the linkElement is present in the document (i.e., within the rendered App component)
  expect(linkElement).toBeInTheDocument();
});
