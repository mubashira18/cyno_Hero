import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Join } from './pages/Join';
import { Navbar } from './components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </div>
  );
}

export default App;
