import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginContainer from '../../components/Login';
import { AppContainer, StyledFormButton } from '../../components/StyledComponents';
import defaultTheme from '../../themes/defaultTheme';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const path = 'http://localhost:3000/signin';

    const response = await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      const data = await response.json();
      const token = data.token;
      localStorage.setItem('authToken', token);

      navigate('/');
    } else {
      alert('Login Falhou');
    }
  };

  return (
    <AppContainer theme={defaultTheme}>
      <LoginContainer>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
          <input 
            type="password" 
            placeholder="Senha" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
          <StyledFormButton theme={defaultTheme} type="submit">Entrar</StyledFormButton>
        </form>
      </LoginContainer>
    </AppContainer>
  );
}

export default Login;