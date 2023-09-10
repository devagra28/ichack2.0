import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import './App.css';
import Sponsor from './pages/Sponsor';
import Team from './pages/Team';
import Track from './pages/Track';
import Footer from './pages/Footer';
import Social from './pages/Social'

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sponsor' element={<Sponsor/>} />
          <Route path='/team' element={<Team/>} />
          <Route path='/track' element={<Track />} />
          {/* <Route path='/contact' element={<Footer />} /> */}
          
        </Routes>
        <Footer />
        <Social />
        
      </BrowserRouter>
      
    </>
  );
}

export default App;
