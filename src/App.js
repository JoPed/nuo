import "bootstrap/dist/css/bootstrap-grid.min.css";
import './assets/css/App.min.css';

import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import Home from './assets/pages/Home';
import GetInTouch from "./assets/pages/GetInTouch";
import WhatWeDo from "./assets/pages/WhatWeDo";
import Maintainable from "./assets/pages/Maintainable";


function App() {
  return (
      <Router>

        <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/whatwedo" element={<WhatWeDo />} />
          <Route path="/maintainable" element={<Maintainable />} />
          <Route path="/getintouch" element={<GetInTouch />} />

            
        </Routes>
    </Router>
  );
}

export default App;
