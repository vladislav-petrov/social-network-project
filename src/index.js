import './index.css';
import render from './render';
import * as state from './redux/state';

render(
  state.state,
  state.addPost,
  state.addMessage,
  state.changeGoToId
);
