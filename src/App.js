import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import ContentContainer from './components/ContentContainer/ContentContainer';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="appWrapper">
          <Header />
          <Nav
            sections={[
              {
                id: '1',
                name: 'Profile'
              },
              {
                id: '2',
                name: 'Chats'
              },
              {
                id: '3',
                name: 'News'
              },
              {
                id: '4',
                name: 'Music'
              },
              {
                id: '5',
                name: 'Settings'
              }
            ]}
          />
          <ContentContainer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
