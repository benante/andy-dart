'use client';
import { useRef, useState } from 'react';
import { login } from './actions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(formRef.current!);
    const formElement = event.currentTarget;

    if (formElement.checkValidity() === true) {
      setLoading(true);
      try {
        await login(formData);
      } catch (error) {
        console.error('Login failed:', error);
      } finally {
        setLoading(false);
      }
    }
    formElement.reportValidity();
    setValidated(true);
  };

  return (
    <main className="grid justify-items-center">
      <Form
        noValidate
        validated={validated}
        ref={formRef}
        onSubmit={handleLogin}
      >
        <Form.Group className="mb-3" controlId="validationName">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="validationPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </Form.Group>
        <Button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Log in'}
        </Button>
      </Form>
    </main>
  );
}
