import { useState, useRef } from 'react';
import './App.css';
import './Mediaquery.css'
import 'animate.css';
import { AnimatePresence } from 'framer-motion';
import Mainnav from './components/Mainnav';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Cars from './components/Cars';
import Allcars from './components/Allcars';
import Contact from './components/Contact';
import AnimatedCursor from "react-animated-cursor"
import Inquiry from './components/Inquiry';


function App() {

  const [loading, setLoading] = useState(true)
  const spinner = document.getElementById('pre-loader');
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = 'none'
      setLoading(false)
    }, 2000)
  }
  return (
    !loading && (
      <div className="App">
        <AnimatedCursor
          color="255,255,255"
          innerSize={12}
          outerSize={39}
          innerScale={1}
          outerScale={2.0}
          outerAlpha={0}
          hasBlendMode={true}
          outerStyle={{
            border: '3px solid #fff',
            mixBlendMode: 'exclusion'
          }}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'input[type="phone"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
        />

        <AnimatePresence exitBeforeEnter>

          <Mainnav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/allcars/:id" element={<Allcars />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rentalinquiry/:name/:path" element={<Inquiry />} />

          </Routes>
        </AnimatePresence>
      </div>
    )
  );
}

export default App;
