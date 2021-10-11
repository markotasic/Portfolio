import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Error404 from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/about-me' />
        </Route>
        <Route path='/about-me' exact>
          <AboutMe />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='*'>
          <Error404 />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
