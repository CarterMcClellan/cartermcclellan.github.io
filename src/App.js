// react standard lib
import { useState } from 'react';

// custom components
import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import CV from './components/cv/cv'
import Projects from './components/projects/projects'

// router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// light and dark mode
import { ThemeProvider } from 'styled-components';


const lightTheme = {
  pageBackground: "#fdf6e5",
  titleColor: "#000",
  tagLineColor: "#000"
}

const darkTheme = {
  pageBackground: "#000",
  titleColor: "#fff",
  tagLineColor: "#fff"
}

const themes = {
  light : lightTheme,
  dark : darkTheme
}

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <ThemeProvider theme={themes[theme]}>

      <div className="App">
        <Sidebar theme={theme} setTheme={setTheme} />
        <Router>
            
              
            <Header/>
            {/* main site content */}
            <div className="content">
              <Switch>
                <Route exact path="/">
                  <CV/>
                </Route>
                <Route path="/projects">
                  <Projects/>
                </Route>
              </Switch>
            </div>
            
            
        </Router>
      </div>

    </ThemeProvider>
    
    
    
  );
}

export default App;
