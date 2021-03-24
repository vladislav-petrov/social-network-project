import classes from './App.module.css';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import Content from './Content/Content';
import { BrowserRouter } from 'react-router-dom';

const App = function(props) {
  return (
    <BrowserRouter>
      <div className={classes.appWrapper}>
        <Header />
        <Nav
          state={props.state}
          changeGoToId={props.changeGoToId}
        />
        <Content
          state={props.state}
          addPost={props.addPost}
          addMessage={props.addMessage}
          changeGoToId={props.changeGoToId}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
