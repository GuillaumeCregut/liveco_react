import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import './App.css';
import Home from './pages/home/Home';
import Restaurant from './pages/resto/Restaurant';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/notfound/NotFound';
import NavBar from './components/navbar/NavBar';
import RestaurantDetails from './components/restaurantdetails/RestaurantDetails';
function App() {

  return (
    <div className='App'>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='resto' element={<Restaurant />}/>
        <Route path='resto/:id' element={<RestaurantDetails />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
