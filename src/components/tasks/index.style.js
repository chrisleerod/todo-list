import styled from 'styled-components';

import { ReactComponent as Drag } from '../icons/drag.svg';
import { ReactComponent as Trash } from '../icons/trash.svg';
import { ReactComponent as Calendar } from '../icons/calendar.svg';

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  // max-height: 65vh; // i removed this!!!

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0);
    border-radius: 5px;
    background-color: rgba(164, 155, 255, 0.333);
  }

  &::-webkit-scrollbar {
    display: none;
    width: 8px;
    height: 5px;
    opacity: 0.75;
    transition: background-color 0.3s;
  }

  &::-webkit-scrollbar-thumb:hover {
    border-radius: 5px;
    background-color: #8e83f4;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0);
    background-color: #8e83f4;
    min-height: 65px;
  }
`;
export const TaskRow = styled.div`
  margin-bottom: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  background: rgba(43, 45, 53, 0.5);
  border-radius: 8px;
`;
export const Title = styled.h2`
  color: white;
  margin-left: 16px;
`;
export const Checkbox = styled.div`
  cursor: pointer;
  width: 12px;
  height: 12px;
  border: 2px solid #95BEFD;
  border-radius: 4px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const DragStyling = styled(Drag)`
  cursor: grabbing;
  margin-left: 16px;
  height: 16px;
`;

export const TrashStyling = styled(Trash)`
  cursor: pointer;
  margin-left: 16px;
  height: 16px;
`;

export const CalendarStyling = styled(Calendar)`
  cursor: pointer;
  height: 16px;
`;

export const Description = styled.p``;