import classes from './Dialogs.module.css';
import Person from './Person/Person';
import Hint from './Hint/Hint';
import Messages from './Messages/Messages';
import { Route } from 'react-router-dom';

const Dialogs = function(props) {
  return (
    <div className={classes.Dialogs}>
      <div className={classes.Dialogs_Persons}>
        {
          props.data.dialogs.map((dialog, index) => {
            return (
              <Person
                key={(index + 1).toString()}

                imageURL={dialog.id === '1' ? props.data.userData.imageURL : props.data.friendsData.find(friend => friend.id === dialog.id).imageURL}

                imageAlt={dialog.id === '1' ? props.data.userData.imageAlt : props.data.friendsData.find(friend => friend.id === dialog.id).imageAlt}

                name={dialog.id === '1' ? `${props.data.userData.firstName} ${props.data.userData.lastName}` : `${props.data.friendsData.find(friend => friend.id === dialog.id).firstName} ${props.data.friendsData.find(friend => friend.id === dialog.id).lastName}`}

                id={dialog.id}
              />
            );
          })
        }
      </div>
      <div className={classes.Dialogs_Messages}>
        <Route
          exact path="/dialogs" component={Hint}
        />
        {
          props.data.dialogs.map((dialog, index) => {
            const friendId = dialog.id;

            return (
              <Route
                key={(index + 1).toString()}
                exact path={`/dialogs/${friendId}`}
                render={(propsRoute) => <Messages {...propsRoute}
                  userData={props.data.userData}

                  friendData={props.data.friendsData.find(friend => friend.id === friendId)}

                  messages={props.data.dialogs.find(dialog => dialog.id === friendId).messages}
                />}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default Dialogs;
