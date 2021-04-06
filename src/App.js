import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Particles from "react-particles-js";
import Home from './components/section/Home';
import Aboutme from './components/section/AboutMe';
import Contact from './components/section/Contact';
import Projects from './components/section/Projects';
import Services from './components/section/Services';



function App() {
  return (
    <>
      <Particles  params={{
          particles: {
            number: {
              value: 10,
              density: {
                enabled: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 5,
                color: "#f9ab00"
              }
            }
          }

        }
}/>

      <NavBar />    
      <Home />
      <Aboutme />
      <Projects />
      <Services />
      <Contact />

    </>
  );
}

export default App;
