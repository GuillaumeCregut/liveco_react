import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import './App.css';
import Home from './pages/home/Home';
import Restaurant from './pages/resto/Restaurant';
function App() {
  return (
    <div className='App'>
      <Header />
      {/* <Home /> */}
      <Restaurant />
      <Footer />
    </div>
  );
}

export default App;
