import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="appWrapper">
          <Header />
          <Nav
            store={this.props.store}
          />
          <Content
            store={this.props.store}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
