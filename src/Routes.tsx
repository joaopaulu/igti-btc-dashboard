import Footer from 'core/components/Footer';
import NavBar from 'core/components/NavBar';
import Dashboard from 'pages/Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>       
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
