import logo from './logo.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'
import CV from './Components/CV'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => <CV></CV>} />
      </Switch>
    </Router>
  )
}

export default App
