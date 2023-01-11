import { FC } from 'react'
import { TechMap } from './leaflet'

const App: FC = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">This is the TSB Tech-Map</header>
      <TechMap />
    </div>
  )
}

export default App
