import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import CV from './components/cv/cv'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Router>
          
            
          <Header/>
          {/* main site content */}
          <div className="content">
            <Switch>
              <Route exact path="/">
                <CV/>
              </Route>
              <Route path="/math">
                <h2> stuff about numbers </h2>
              </Route>
            </Switch>
          </div>
          
          
      </Router>
    </div>
    
    
  );
}

export default App;
