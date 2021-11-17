import HomePage from './pages/HomePage';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Error404 from './pages/NotFound';
import ProjectDetail from './pages/ProjectDetail';
import { ProjectDetailData } from './components/Slider/ProjectsData';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/:detail'>
          <ProjectDetail slides={ProjectDetailData} />
        </Route>
        <Route path='*'>
          <Error404 />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
