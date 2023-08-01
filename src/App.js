import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Resume from './components/Resume'
import './App.css'

const App = () => (
  <div className="page">
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
        <Route path="not-found" component={NotFound} />
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
