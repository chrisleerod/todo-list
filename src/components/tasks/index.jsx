import { useSelector, useDispatch } from 'react-redux';
import { TaskList, TaskRow, Checkbox, Title, Description, DragStyling, TrashStyling, CalendarStyling, IconWrapper } from './index.style';

import { selectTasks, remove } from '../../store/slices/tasks';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const onRemove = () => {
    dispatch(remove(task.id));
  };

  const { title, description } = task;
  return (
    <TaskRow>
      <Checkbox />
      <Title>{title}</Title>
      <IconWrapper>
      <CalendarStyling />
      <TrashStyling onClick={onRemove} />
      <DragStyling />
      </IconWrapper>
      {description ? <Description>{description}</Description> : null}
    </TaskRow>
  );
}

export default () => {
  const byIds = useSelector(selectTasks);

  const tasks = Object.values(byIds);

  return (
    <TaskList>
      {tasks.map(task => <Task key={task.id} task={task} />)}
    </TaskList>
  );
}
