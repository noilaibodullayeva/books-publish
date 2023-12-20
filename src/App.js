
import './App.css';
import About from './about';
import Blog from './blog';
import Books from './books';
import Corusels from './clients';
import Footer from './footer';
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
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
