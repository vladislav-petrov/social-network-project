import './App.css';
import Header from './Header';
import Socials from './Socials';
import Developers from './Developers';
import Footer from './Footer';

const App = function() {
  return (
    <div className="App">
      <Header />
      <Socials />
      <Developers />
      <Footer />
    </div>
  );
}

export default App;