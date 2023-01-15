import './App.css';
import { Routes, Route } from 'react-router-dom';
import Menubar from './components/Menubar/Menubar';
import Products from './components/Products/Products';
import Categories from './components/Categories/Categories';
import Orders from './components/Orders/Orders';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Carusel from './components/Carusel/Carusel';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Menubar></Menubar>
      <Carusel></Carusel>
      <Categories></Categories>

      <Routes>

        <Route path='/' element={<Products></Products>}>

        </Route>
        <Route path='/home' element={<Products></Products>}>

        </Route>
        <Route path='/orders' element={<Orders></Orders>}>

        </Route>
        <Route path='/login' element={<Login></Login>}>

        </Route>
        <Route path='/profile' element={<Profile></Profile>}>

        </Route>
        <Route path='*' element={<NotFound></NotFound>}>

        </Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
