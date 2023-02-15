import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import { TechMap } from './components/techmap'
import './styles/global.css'

const App: FC = (): JSX.Element => {
  const { i18n } = useTranslation()
  const locale = useParams().locale
  useEffect(() => {
    console.log('CHANGE LANG')
    i18n.changeLanguage(locale)
  }, [i18n, locale])
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
