import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ServiceDetails from './pages/ServiceDetails';
import PublicServices from './pages/PublicServices';
import PublicServicesElement from './pages/PublicServicesElement';
import ServicesElement from './pages/ServicesElement';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './pages/contact';
import Servicecat from './pages/Servicecat';

function App() {
    const categories = [
  "الهوية والوثائق",
  "السفر والجوازات",
  "المرور والنقل",
  "الصحة",
  "التعليم",
  "التموين والدعم",
  "الإسكان والعقارات",
  "التأمينات والعمل",
  "الشؤون الاجتماعية",
  "الخدمات الرقمية",
];


  return (
    <div className="App">
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/services' element={<ServiceDetails />} />
                <Route path='/services/:id' element={<ServicesElement />} />
                <Route path='/public' element={<PublicServices />} />
                {
                    categories.map((cat, idx) => (
                        <Route key={idx} path={`/public/${cat}`} element={<Servicecat />} />
                    ))
                }
                <Route path='/public/:id' element={<PublicServicesElement />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
