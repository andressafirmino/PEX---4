import axios from 'axios';
import { useEffect, useState, type FormEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { useAuth } from '../../context/auth';
import {
  BackLink,
  Card,
  ErrorMessage,
  FieldGroup,
  Input,
  Label,
  PageContainer,
  SubmitButton,
  Subtitle,
  Title,
} from './style';

function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as { message?: string; name?: string } | undefined;
    if (data?.message) return data.message;
    if (data?.name === 'InvalidCredentialsError') {
      return 'Usuário ou senha incorretos.';
    }
    if (error.response?.status === 401) return 'Usuário ou senha incorretos.';
  }
  return 'Não foi possível entrar. Tente novamente.';
}

export default function LoginPage() {
  const { login, isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from ?? '/admin';

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated && isAdmin) {
      navigate(from, { replace: true });
    }
  }, [from, isAdmin, isAuthenticated, navigate]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login({ user: user.trim(), password });
      navigate(from, { replace: true });
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <PageContainer>
        <Card onSubmit={handleSubmit}>
          <Title>Área do admin</Title>
          <Subtitle>Entre para gerenciar o cardápio</Subtitle>

          <FieldGroup>
            <Label htmlFor="user">Usuário</Label>
            <Input
              id="user"
              name="user"
              autoComplete="username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FieldGroup>

          {error ? <ErrorMessage>{error}</ErrorMessage> : null}

          <SubmitButton type="submit" disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </SubmitButton>

          <BackLink as={Link} to="/">
            Voltar ao cardápio
          </BackLink>
        </Card>
      </PageContainer>
    </>
  );
}
