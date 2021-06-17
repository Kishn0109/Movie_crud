import "./App.css";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from "./Home.js";
import Form from "./Form";
import Update from "./Update";
function App() {
  return (
    
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
      
              <Route exact path="/user/form">
                <Form/>
              </Route>

              <Route exact path="/user/update/:id">
                <Update/>
              </Route>
            
          </Switch>
        </Router>
    </div>

  );
}

export default App;
