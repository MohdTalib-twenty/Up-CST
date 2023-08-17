import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Screens/Home';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Connect from './Screens/Connect';
import EDashboard from './Screens/EDashboard';
import UDashboard from './Screens/UDashboard';
import Rates from './Screens/Rates';
function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/connect' element={<Connect/>}/>
        <Route path='/dashboard/:email' element={<EDashboard/>}/>
        <Route path='/dashboard/:email/U' element={<UDashboard/>}/>
        <Route path="/rates" element ={<Rates/>}/>
     </Routes>
     
    </BrowserRouter>
  );
}

export default App;
