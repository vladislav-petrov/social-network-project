import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const render = function(
  state,
  addPost,
  addMessage,
  changeGoToId
) {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        addMessage={addMessage}
        changeGoToId={changeGoToId}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

export default render;
