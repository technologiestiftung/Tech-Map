import { FC } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import { TechMap } from './techmap'

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
