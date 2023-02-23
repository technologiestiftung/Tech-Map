import { FC, useEffect } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TechMap } from './components/techmap'
import './styles/global.css'

const App: FC = (): JSX.Element => {
  useEffect(() => {
    document.title = 'Tech Map - Digital Services'
  }, [])
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/:locale/:institute" element={<TechMap />}></Route>
          <Route path="/:locale" element={<TechMap />}></Route>
          <Route path="/generator" element={<TechMap generator />}></Route>
          <Route path="/" element={<TechMap />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
