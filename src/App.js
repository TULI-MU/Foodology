import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import Menu from './Menu/Menu';
import Login from './Login/Login';
import NotFound from './NotFound/NotFound';
import Register from './Login/Register/Register';
import RequireAuth from './Login/RequireAuth/RequireAuth';
import Checkout from './CheckOut/CheckOut/CheckOut';
import ProgramDetail from './ProgramDetail/ProgramDetail';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/program/:programId" element={<ProgramDetail></ProgramDetail>}></Route>
        <Route path="/menu" element={<Menu></Menu>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
