import classes from './Content.module.css';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import { Route } from 'react-router-dom';

const Content = function(props) {
  return (
    <div className={classes.Content}>
      <Route
        path="/profile"
        render={(propsRoute) => <Profile {...propsRoute} data={props.data} />}
      />
      <Route
        path="/dialogs"
        render={(propsRoute) => <Dialogs {...propsRoute} data={props.data} />}
      />
    </div>
  );
}

export default Content;
