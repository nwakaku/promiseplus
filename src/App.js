import './App.css';
import AIDoc from './components/AIDoc';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <NavBar />

      <Switch>

        <Route path="/preMed">
          <AIDoc />
        </Route>
        <Route path="/">
          <HomeSection />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
