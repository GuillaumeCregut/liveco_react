import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import './App.css';
import Home from './pages/home/Home';
import Restaurant from './pages/resto/Restaurant';
import { useState } from 'react';
function App() {
  const [globalPrice, setGlobalPrice] = useState(0);
  return (
    <div className='App'>
      <Header />
      {/* <Home  globalPrice={globalPrice} /> */}
      <Restaurant globalPrice={globalPrice} setGlobalPrice={setGlobalPrice} />
      <p>PRix Total : {globalPrice} euros</p>
      <Footer />
    </div>
  );
}

export default App;
