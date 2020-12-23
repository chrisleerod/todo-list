import { App, Header } from './index.style';
import Toolbar from '../toolbar';
import NewTask from '../newtask';
import Tasks from '../tasks';

export default () => (
  <App>
    <Header>Todo-List App</Header>
    <Toolbar />
    <NewTask />
    <Tasks />
  </App>
);
