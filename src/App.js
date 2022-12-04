import './App.css';
import Navbar from './Component/Navbar';
import { Routes, Route } from 'react-router-dom';
import About from './Component/Pages/About';
import Contact from './Component/Pages/Contact';
import Cards from './Component/Cards';
import CardDetails from './Component/Innerpages/CardDetails';

const App=()=> {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Cards/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/carts/:id" element={<CardDetails/>}></Route>
    </Routes>
    </>
  );
}

export default App;
