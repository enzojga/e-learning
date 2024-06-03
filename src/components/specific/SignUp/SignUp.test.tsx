import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import SignUp from './SignUp';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('SignUp Component', () => {
  test('renders SignUp component', () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });

  test('shows error if passwords do not match', () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByPlaceholderText('Username'), {
      target: { value: 'user123' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password' },
    });
    fireEvent.change(screen.getByPlaceholderText('Confirm password'), {
      target: { value: 'differentPassword' },
    });

    fireEvent.click(screen.getByText('Create account'));

    expect(toast.error).toHaveBeenCalledWith('As senhas devem coincidir!');
  });

  test('shows error if username or password is less than 5 characters', () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByPlaceholderText('Username'), {
      target: { value: 'user' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'pass' },
    });
    fireEvent.change(screen.getByPlaceholderText('Confirm password'), {
      target: { value: 'pass' },
    });

    fireEvent.click(screen.getByText('Create account'));

    expect(toast.error).toHaveBeenCalledWith('Os campos de usuário e senha precisam ter ao menos 5 carácteres!');
  });

  test('navigates to login on successful sign up', async () => {
    const mockNavigate = jest.fn();
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockNavigate);

    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByPlaceholderText('Username'), {
      target: { value: 'user123' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password' },
    });
    fireEvent.change(screen.getByPlaceholderText('Confirm password'), {
      target: { value: 'password' },
    });

    fireEvent.click(screen.getByText('Create account'));

    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith('Conta criada com sucesso!');
    });

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/login');
    });
  });

  test('navigates to login if click on dark button', async () => {
    const mockNavigate = jest.fn();
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockNavigate);

    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('Login'));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/login');
    });
  });

});
