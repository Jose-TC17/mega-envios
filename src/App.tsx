import './App.css'

import { BrowserRouter as Router } from "react-router-dom";

import LinkRouter from "./route/Route.tsx";

function App() {

  return (
    <Router>
        <LinkRouter />
    </Router>
  )
}

export default App
