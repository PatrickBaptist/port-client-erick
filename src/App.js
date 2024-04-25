import './App.scss';
import Footer from './components/footer/indext';
import Whats from './components/whats-contact/index'
import Header from './components/header';
import Menu from './components/menu';
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Interno from './pages/internos';
import Externo from './pages/externos';
import Eventos from './pages/eventos';
import ScrollToTop from "./components/scrolltotop/scrolltotop"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Menu />

        <ScrollToTop />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/internos' element={<Interno />} />
            <Route path='/externos' element={<Externo />} />
            <Route path='/eventos' element={<Eventos />} />
        </Routes>

        <Whats />
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
