
import styles from "./App.module.css";
import {Hero} from "./Components/Hero/Hero";
import {Navbar} from "./Components/NavBar/Navbar";
import {About} from "./Components/About/About";
import { Experience } from "./Components/Experience/Experience";
import {Projects} from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";
function App() {
  return (
  <div className={styles.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Projects/>
    <Contact/>
  </div>
  );
};

export default App;
