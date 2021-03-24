import classes from './Content.module.css';
import Profile from './Profile/Profile';
import Chats from './Chats/Chats';
import { Route } from 'react-router-dom';

const Content = function(props) {
  const id = props.state.goToId;

  return (
    <div className={classes.Content}>
      <Route
        path={`/id${id}`}
        render={(propsRoute) => <Profile {...propsRoute}
          id={id}
          state={props.state}
          addPost={props.addPost}
          changeGoToId={props.changeGoToId}
        />}
      />
      <Route
        path="/chats"
        render={(propsRoute) => <Chats {...propsRoute}
          state={props.state}
          addMessage={props.addMessage}
        />}
      />
    </div>
  );
}

export default Content;
