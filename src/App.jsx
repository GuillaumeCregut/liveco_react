import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import './App.css';
import Home from './pages/home/Home';
import Restaurant from './pages/resto/Restaurant';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/notfound/NotFound';
import NavBar from './components/navbar/NavBar';
import RestaurantDetails from './components/restaurantdetails/RestaurantDetails';
import Contact from './pages/contact/Contact';
import NewPage1 from './components/newpages/NewPage1';
import NewPage2 from './components/newpages/NewPage2';
import NewPage3 from './components/newpages/NewPage3';
function App() {
  return (
    <div className='App'>
      <Header />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='resto' element={<Restaurant />} />
        <Route path='resto/:id' element={<RestaurantDetails />} />
        <Route path='contact' element={<Contact />}>
          <Route index element={<NewPage1 />} />
          <Route path='page2' element={<NewPage2 />} />
          <Route path='page3' element={<NewPage3 />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
