import {BrowserRouter, Route,Routes} from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Signup from './components/Signup'

import './App.css'

const App = () => (
  <BrowserRouter>
  <Routes>
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/" element={<Signup/>} />
      <Route exact path="/Dashboard" element={<Dashboard/>} />
  </Routes>
  </BrowserRouter>
)

export default App
