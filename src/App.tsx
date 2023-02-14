import { FC } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TechMap } from './components/techmap'
import './styles/global.css'

const App: FC = (): JSX.Element => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TechMap />}></Route>
          <Route path="/generator" element={<TechMap generator />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
