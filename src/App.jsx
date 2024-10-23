import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Categories from './pages/Categories/Categories';
import Latest from './pages/Latest/Latest';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import NotificationPage from './pages/NotificationPage/NotificationPage';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route> {/* Changed 'to' to 'path' */}
        <Route path='/categories' element={<Categories/>}></Route>
        <Route path='/latest' element={<Latest/>}></Route>
        <Route path='/notifications' element={<NotificationPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
