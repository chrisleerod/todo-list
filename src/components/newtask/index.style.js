import styled, { css } from 'styled-components';

export const NewTaskWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  color: white;
  align-items: center;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  font-size: 16px;
  color: white;
  margin-left: 16px;
  &::placeholder {
    color: white;
  }
`;
