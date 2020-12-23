import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NewTaskWrapper, Input } from './index.style';
import { ReactComponent as NewTask } from '../icons/add.svg';

import { add } from '../../store/slices/tasks';

export default () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const onKeyPress = (event) => {
        const { which } = event;

        // enter press
        if (which === 13) {
            const title = value.trim();
            if (!title) {
                return;
            }

            setValue('');
            
            // TODO: Launch modal window
            return dispatch(add({ title }));
        }
    }

    return (
        <NewTaskWrapper>
            <NewTask />
            <Input
                placeholder="Enter task name..."
                onChange={({ target }) => setValue(target.value)}
                onKeyPress={(e) => onKeyPress(e)}
                value={value}
            />
        </NewTaskWrapper>
    );
}