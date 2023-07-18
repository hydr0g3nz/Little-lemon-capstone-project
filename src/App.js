
import './App.css';
import Main from './components/Main';

import Nav from './components/Nav';
import Footer from './components/Footer';
import { Route,Routes } from 'react-router-dom';
import Home from './page/Home'
import About from './page/About';
import Login from './page/Login';
import Menu from './page/Menu';
import OrderOnline from './page/OrderOnline';
import ReserveTable from './page/ReserveTable';
function App() {
  return (
    <div className='Container'>
      <Nav className="nav"></Nav>
      <Main className="main">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/reserve-table" element={<ReserveTable/>}></Route>
        <Route path="/order-online" element={<OrderOnline />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      </Main>
   
    
    
    <Footer className="footer"></Footer>
    
    
    </div>
  );
}

export default App;
