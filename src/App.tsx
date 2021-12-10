import HomePage from './pages/HomePage';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Error404 from './pages/NotFound';
function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='*'>
          <Error404 />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
