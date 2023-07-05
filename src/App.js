import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootswatch/dist/lux/bootstrap.min.css"; // Added this :lux:

import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Navigationbar from "./components/Navigationbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigationbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
