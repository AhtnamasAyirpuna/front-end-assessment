import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { login } from '../slices/authSlice.js';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    if (email === 'traveler@demo.com' && password === 'wanderlust123') {
      navigate('/trips');
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/thumbnails/033/645/608/small_2x/sunset-view-from-airplane-window-generative-ai-photo.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        position: 'fixed',
        zIndex: -1,
      }}
    >
      {/* Dark overlay for readability */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}
      ></div>

      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Card
          className="p-5 text-center shadow-sm mx-auto"
          style={{
            borderRadius: '20px',
            background: 'rgba(255, 255, 255, 0.65)',
            maxWidth: '650px',
            zIndex: 1,
          }}
        >
          <h4 className="mb-3">Welcome!</h4>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="traveler@demo.com"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="wanderlust123"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
}
