import './App.css';
import Projects from './pages/projects/index';
import AboutMe from './pages/about-me';
import Contact from './pages/contact';
import { Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Route path='/projects'>
        <Projects />
      </Route>
      <Route path='/about-me'>
        <AboutMe />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
    </Layout>
  );
}

export default App;
