import styled from 'styled-components';
import { colors } from '../../styles/theme';

export const PageContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 92px);
  margin-top: 92px;
  background-color: ${colors.pageBg};
  display: flex;
  justify-content: center;
  padding: 33px 24px 48px;
  box-sizing: border-box;
`;

export const Card = styled.form`
  width: 100%;
  max-width: 480px;
  background-color: ${colors.cardBg};
  border: 1px solid ${colors.cardBorder};
  border-radius: 9px;
  padding: 28px 24px;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-self: flex-start;
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 500;
  color: ${colors.text};
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: ${colors.textMuted};
  margin: -6px 0 4px;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${colors.text};
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${colors.cardBorder};
  border-radius: 8px;
  padding: 0 12px;
  font-size: 15px;
  color: ${colors.text};
  background-color: ${colors.white};

  &:focus {
    outline: 2px solid ${colors.accent};
    outline-offset: 1px;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 40px;
  border: 1px solid ${colors.cardBorder};
  border-radius: 8px;
  padding: 0 12px;
  font-size: 15px;
  color: ${colors.text};
  background-color: ${colors.white};

  &:focus {
    outline: 2px solid ${colors.accent};
    outline-offset: 1px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 88px;
  border: 1px solid ${colors.cardBorder};
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 15px;
  color: ${colors.text};
  background-color: ${colors.white};
  resize: vertical;

  &:focus {
    outline: 2px solid ${colors.accent};
    outline-offset: 1px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 4px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 50px;
  background-color: ${colors.accent};
  color: ${colors.white};
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover:not(:disabled) {
    background-color: ${colors.accentHover};
  }

  &:disabled {
    background-color: ${colors.disabled};
    cursor: not-allowed;
  }
`;

export const SecondaryButton = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid ${colors.brand};
  border-radius: 50px;
  background-color: transparent;
  color: ${colors.brand};
  font-size: 15px;
  cursor: pointer;
`;

export const Message = styled.p<{ $variant: 'error' | 'success' }>`
  font-size: 14px;
  margin: 0;
  color: ${(props) => (props.$variant === 'error' ? colors.error : colors.success)};
`;

export const Hint = styled.span`
  font-size: 12px;
  color: ${colors.textMuted};
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 4px;
`;

export const TextLink = styled.a`
  font-size: 14px;
  color: ${colors.brand};
  cursor: pointer;
`;
