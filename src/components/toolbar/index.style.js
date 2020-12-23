import styled, { css } from 'styled-components';

export const ToolbarWrapper = styled.div`
  display: flex;
  margin-top: 32px;
`;

export const ToolbarButton = styled.button`
  // NOTE: this is the in completed base styles
  display: flex;
  padding: 8px;
  color: rgba(110, 182, 121, .60); // green base
  font-weight: 700;
  margin-right: 16px;
  font-size: 16px;
  border: none;
  border-radius 4px;
  background-color: transparent;
  cursor: pointer;

  // NOTE: this is the in progress base styles
  ${props => props.primary && css`
    color: rgba(149, 190, 253, .60);
  `}

  // NOTE: theses are both "positive" state changes
  ${props => props.positive && css`
    color: rgba(110, 182, 121, 1);
    background-color: rgba(235, 255, 238, .05);
    ${props => props.primary && css`
      color: rgba(149, 190, 253, 1);
      background-color: rgba(149, 190, 253, .05);
    `}
  `}
`;