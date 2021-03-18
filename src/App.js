import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';
import { BrowserRouter } from 'react-router-dom';

const App = function(props) {
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header />
        <Nav />
        <Content data={props.data}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
