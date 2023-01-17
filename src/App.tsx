import { FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { TechMap } from './leaflet'

const App: FC = (): JSX.Element => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">This is the TSB Tech-Map</header>
        <Routes>
          <Route path="/" element={<TechMap />}></Route>
          <Route path="/generator" element={<TechMap development />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
