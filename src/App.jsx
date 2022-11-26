import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExcerciesDetail from './Components/Pages/ExcerciesDetail';
import HelpUs from './Components/Pages/HelpUs';
import Home from './Components/Pages/Home';
import ShareLayOut from './Components/Pages/ShareLayOut';
import { ThemeStore } from './Context/Theme';
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {
  AOS.init({
    offset: 150,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 500,
  });
  return (
    <ThemeStore>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<ShareLayOut />}>
            <Route index element={<Home />} />
            <Route path="exercises/:id" element={<ExcerciesDetail />} />
            <Route path="helpus" element={<HelpUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeStore>
  );
};

export default App;
