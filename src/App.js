import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import { Route, Routes } from 'react-router-dom';
import Banner from './Home/Banner/Banner';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Home></Home>}></Route>
        <Route path="/menu" element={<Home></Home>}></Route>
        <Route path="/aboutus" element={<Home></Home>}></Route>
        <Route path="/login" element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
