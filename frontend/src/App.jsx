import { NextUIProvider } from '@nextui-org/react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';

import About from './pages/About/About';
import Home from './pages/Home/Home';
import Hackathon from './pages/Hackathon/Hackathon';
import { Footer } from './components';
import Open from './pages/Hackathon/Open';
import Upcoming from './pages/Hackathon/Upcoming';
import Past from './pages/Hackathon/Past';
import CodeField from './pages/CodeField/CodeField';
import MeetUp from './pages/MeetUp/MeetUp';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <NextUIProvider navigate={navigate}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/hackathons" element={<Hackathon />} />
          <Route path="/hackathons/open" element={<Open />} />
          <Route path="/hackathons/upcoming" element={<Upcoming />} />
          <Route path="/hackathons/past" element={<Past />} />

          <Route path="/code-field" element={<CodeField />} />
          <Route path="/meet-ups" element={<MeetUp />} />
        </Routes>
        <Footer />
      </NextUIProvider>
    </>
  )
}

export default App
