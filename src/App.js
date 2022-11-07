//Styling
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './assets/css/App.min.css';
import Container from 'react-bootstrap/Container';


//React + packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext } from 'react';


//Pages
import Home from './assets/pages/Home';
import GetInTouch from './assets/pages/GetInTouch';
import WhatWeDo from './assets/pages/WhatWeDo';
import Maintainable from './assets/pages/Maintainable';


//Components
import UseFetch from './assets/components/UseFetch';
import Navigation from './assets/components/Navigation';
import { useRef } from 'react';




//*Context provider
export const ContainerRefContext = createContext();

function App() {

  //data now contains all the data from content.json
  const [data] = UseFetch('./assets/content.json');

  //*useref
  const mainContentRef = useRef();

  return (
    <Router>
      <Container fluid ref={mainContentRef}>
        <Container fluid="lg">
          {data && <Navigation navData={data.navigation} />}

          <ContainerRefContext.Provider value={mainContentRef}>

            <Routes >
              {/**Only send data via the props, when it exists. Only sending the data needed for the specific component, not the whole data object */}



              <Route path="/"
                element={data && <Home content={data.content[0]} />}
              />

              <Route path="/whatwedo"
                element={data && <WhatWeDo content={data.content[1]} />}
              />

              <Route path="/maintainable"
                element={data && <Maintainable content={data.content[2]} />}
              />

              <Route path="/getintouch"
                element={data && <GetInTouch content={data.content[3]} />}
              />

            </Routes>

          </ContainerRefContext.Provider>

        </Container>
      </Container>



    </Router >
  );
}

export default App;
