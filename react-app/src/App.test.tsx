import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import App from './App';
import {getTestPhrase, getTodos} from './api';

jest.mock('./api', () => ({
  __esModule: true,
  getTestPhrase: jest.fn().mockResolvedValue(''),
  getTodos: jest.fn().mockResolvedValue([]),
}));

test('renders', () => {
  render(<App />);
  const linkElement = screen.getByText('Todos:');
  expect(linkElement).toBeInTheDocument();
});

test('shows phrase', async () => {
  expect.assertions(2);
  const testPhraseMock = (getTestPhrase as jest.Mock).mockResolvedValueOnce(
    'Test Phrase'
  );
  render(<App />);
  await waitFor(() => expect(testPhraseMock).toHaveBeenCalled());
  expect(await screen.findByText('Test Phrase')).toBeInTheDocument();
  testPhraseMock.mockClear();
});

test('shows todos', async () => {
  expect.assertions(2);
  const testTodoMock = (getTodos as jest.Mock).mockResolvedValueOnce([
    {name: 'Test Item'},
  ]);
  render(<App />);
  await waitFor(() => expect(testTodoMock).toHaveBeenCalled());
  expect(await screen.findByText('Test Item')).toBeInTheDocument();
  testTodoMock.mockClear();
});
