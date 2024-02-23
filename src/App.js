import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Mission from './components/Missions';
import Section3 from './components/Section3';
import Section4 from './components/Section-4';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Team from './components/Team';
import Home from './components/Home';
import Footer from './components/Footer';
import Cars from './components/Cars';
import Achievement from './components/Achievement';
import Gallery from './components/Gallery';
import Events from './components/Events';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />

        <Route path="/team" element={<Team/>} />
        <Route path="/cars" element={<Cars/>} />
        <Route path="/achievement" element={<Achievement/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/events" element={<Events/>} />

        </Routes>
        <Footer/>
      </div>
      
    </BrowserRouter>

    
  );
}

export default App;
