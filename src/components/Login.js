import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState(''); // If using email, change 'username' to 'email'
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      // Sending a login request to the API
      const response = await axios.post('http://localhost:9999/login', { username });
      if (response.data && response.data.user) {
        const user = response.data.user; // Assume the response contains the user data directly
  
        localStorage.setItem('loggedInUser', JSON.stringify(user)); // Store the user data in localStorage
        setLoginSuccess(true);
  
        // Navigate to the home page
        navigate('/');
      } else {
        // Handle error when user is not found
        console.error('Login error:', 'User not found');
        setErrorMessage('User not found.');
      }
    } catch (error) {
      // Handle errors during login
      if (error.response) {
        console.error('Login error:', error.response.data);
        setErrorMessage(error.response.data.message || 'An error occurred while logging in.');
      } else if (error.request) {
        console.error('Login error:', 'No response received from the server');
        setErrorMessage('No response received from the server');
      } else {
        console.error('Login error:', error.message);
        setErrorMessage('An error occurred while logging in');
      }
    }
  };

  return (
    <Container>
      <Row>
        <Col className='m-5'>
          <img src='logo.png' alt="Logo" />
        </Col>
      </Row>
      <Row className='mt-5 mx-auto' style={{ maxWidth: '300px' }}>
        <Col>
          <h1 className='text-center'>Sign In</h1>
          <Form className='mt-4' onSubmit={handleLogin}>
            <Form.Group>
              <Form.Label>Username</Form.Label> {/* Change to Email if needed */}
              <Form.Control
                type='text'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </Form.Group>

            <Button
              className='mt-4 w-100'
              style={{ backgroundColor: '#8932f4' }}
              type="submit"
            >
              Sign In
            </Button>

            {/* Show success message on successful login */}
            {loginSuccess && (
              <p className='text-success'>Login successful!</p>
            )}

            {/* Show error message if any */}
            {errorMessage && (
              <p className='text-danger'>{errorMessage}</p>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
