import axios from 'axios';
import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { useAuth } from '../../context/auth';
import type { CreateProductPayload, ProductCategory } from '../../protocols';
import { productsService } from '../../services';
import {
  Actions,
  Card,
  FieldGroup,
  Hint,
  Input,
  Label,
  Message,
  NavLinks,
  PageContainer,
  SecondaryButton,
  Select,
  SubmitButton,
  Subtitle,
  TextArea,
  TextLink,
  Title,
} from './style';

const EMPTY_FORM: CreateProductPayload = {
  name: '',
  price: 0,
  description: '',
  type: 'snacks',
};

const CATEGORY_OPTIONS: { value: ProductCategory; label: string }[] = [
  { value: 'snacks', label: 'Salgados' },
  { value: 'drinks', label: 'Bebidas' },
  { value: 'desserts', label: 'Doces' },
];

function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as { message?: string } | undefined;
    if (data?.message) return data.message;
    if (error.response?.status === 401) return 'Sessão expirada. Faça login novamente.';
    if (error.response?.status === 403) return 'Acesso negado. Apenas administradores.';
  }
  return 'Não foi possível salvar o produto. Verifique os dados.';
}

export default function AdminPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState<CreateProductPayload>(EMPTY_FORM);
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  function updateField<K extends keyof CreateProductPayload>(
    field: K,
    value: CreateProductPayload[K],
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    const payload: CreateProductPayload = {
      ...form,
      name: form.name.trim(),
      description: form.description.trim(),
      price: Number(form.price),
    };

    const trimmedImage = imageUrl.trim();
    if (trimmedImage) {
      payload.imageUrl = trimmedImage;
    }

    try {
      await productsService.createProduct(payload);
      setSuccess(`"${payload.name}" adicionado ao cardápio.`);
      setForm({ ...EMPTY_FORM, type: form.type });
      setImageUrl('');
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 401) {
        logout();
        navigate('/login', { replace: true });
        return;
      }
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    logout();
    navigate('/login', { replace: true });
  }

  return (
    <>
      <Header />
      <PageContainer>
        <Card onSubmit={handleSubmit}>
          <Title>Novo item no cardápio</Title>
          <Subtitle>Preencha os dados do produto</Subtitle>

          <FieldGroup>
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => updateField('name', e.target.value)}
              required
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="price">Preço (R$)</Label>
            <Input
              id="price"
              type="number"
              min="0"
              step="0.01"
              value={form.price || ''}
              onChange={(e) => updateField('price', Number(e.target.value))}
              required
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="type">Categoria</Label>
            <Select
              id="type"
              value={form.type}
              onChange={(e) => updateField('type', e.target.value as ProductCategory)}
            >
              {CATEGORY_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="description">Descrição</Label>
            <TextArea
              id="description"
              value={form.description}
              onChange={(e) => updateField('description', e.target.value)}
              required
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="imageUrl">URL da imagem (opcional)</Label>
            <Input
              id="imageUrl"
              type="url"
              placeholder="https://..."
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <Hint>Deve ser uma URL completa, como no seed do backend.</Hint>
          </FieldGroup>

          {error ? <Message $variant="error">{error}</Message> : null}
          {success ? <Message $variant="success">{success}</Message> : null}

          <Actions>
            <SubmitButton type="submit" disabled={loading}>
              {loading ? 'Salvando...' : 'Adicionar ao cardápio'}
            </SubmitButton>
            <SecondaryButton type="button" onClick={handleLogout}>
              Sair
            </SecondaryButton>
          </Actions>

          <NavLinks>
            <TextLink as={Link} to="/">
              Ver cardápio
            </TextLink>
          </NavLinks>
        </Card>
      </PageContainer>
    </>
  );
}
