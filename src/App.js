import Navbar from './navbar.js';
import Content from './content.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Addnew from './add.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
            <Route exact path="/">
              <Content />
            </Route>
            <Route path="/add">
              <Addnew />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
