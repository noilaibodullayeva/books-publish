
import './App.css';
import About from './about';
import Books from './books';
import Corusels from './clients';
import Header from './header';
import Header2 from './header2';
import Home from './home';
import Numbers from './numbers';

function App() {
  return (
    <div >
      <Header2/>
      <Header/>
      <Home/>
      <Numbers/>
      <About/>
      <Books/>
      <Corusels/>
    </div>
  );
}

export default App;
