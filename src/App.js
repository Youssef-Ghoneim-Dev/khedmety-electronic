import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ServiceDetails from './pages/ServiceDetails';
import PublicServices from './pages/PublicServices';
import PublicServicesElement from './pages/PublicServicesElement';
import ServicesElement from './pages/ServicesElement';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/services' element={<ServiceDetails />} />
                <Route path='/services/:id' element={<ServicesElement />} />
                <Route path='/public' element={<PublicServices />} />
                <Route path='/public/:id' element={<PublicServicesElement />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
