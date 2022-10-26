//Styling
import "bootstrap/dist/css/bootstrap-grid.min.css";
import './assets/css/App.min.css';

//React imports
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

//Pages
import Home from './assets/pages/Home';
import GetInTouch from "./assets/pages/GetInTouch";
import WhatWeDo from "./assets/pages/WhatWeDo";
import Maintainable from "./assets/pages/Maintainable";

//Components
import useFetch from "./assets/components/useFetch";


function App() {

  const [data] = useFetch("/assets/content.json");

  return (
      <Router>

        <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/whatwedo" element={ data && <WhatWeDo data={data.content[0]}/>} />
          <Route path="/maintainable" element={<Maintainable />} />
          <Route path="/getintouch" element={<GetInTouch />} />

            
        </Routes>
    </Router>
  );
}

export default App;
