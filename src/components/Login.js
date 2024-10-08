import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import axios from 'axios'; // Add axios for making API requests
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
     event.preventDefault();
     try {
       axios.post('http://localhost:9999/login', {
         username,
       })
       .then(response => {
         const { accessToken, refreshToken } = response.data;
         setAccessToken(accessToken);
         setRefreshToken(refreshToken);
         setLoginSuccess(true);
         // Store tokens in local storage or cookies for later use
         localStorage.setItem('accessToken', accessToken);
         localStorage.setItem('refreshToken', refreshToken);
         navigate('/');
       })
       .catch(error => {
         console.error('Lỗi khi đăng nhập:', error.response ? error.response.data : error.message);
         alert('Có lỗi xảy ra khi đăng nhập.');
       });
     } catch (error) {
       console.error(error);
     }
   };
  return (
    <Container>
      <Row>
        <Col className='m-5'>
          <img src='logo.png'/>
        </Col>
      </Row>
      <Row className='mt-5 mx-auto' style={{ maxWidth: '300px' }}>
        <Col>
          <h1 className='text-center'>Sign In</h1>
          <Form className='mt-4'>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </Form.Group>
          </Form>

          <Button
            className='mt-4 w-100'
            style={{ backgroundColor: '#8932f4' }}
            onClick={handleLogin}
          >
            Sign In
          </Button>

          {loginSuccess && (
            <p className='text-success'>Login successful! Access token: {accessToken}, Refresh token: {refreshToken}</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Login;