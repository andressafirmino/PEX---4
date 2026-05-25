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
  max-width: 400px;
  background-color: ${colors.cardBg};
  border: 1px solid ${colors.cardBorder};
  border-radius: 9px;
  padding: 28px 24px;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 18px;
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
  margin: -8px 0 4px;
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
  margin-top: 4px;

  &:hover:not(:disabled) {
    background-color: ${colors.accentHover};
  }

  &:disabled {
    background-color: ${colors.disabled};
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 14px;
  color: ${colors.error};
  margin: 0;
`;

export const BackLink = styled.a`
  font-size: 14px;
  color: ${colors.brand};
  text-align: center;
  margin-top: 4px;
  cursor: pointer;
`;
