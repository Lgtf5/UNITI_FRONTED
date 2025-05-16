import { useState } from 'react'

import './App.css'
import { WelcomeView } from './views/WelcomeView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WelcomeView />
    </>
  )
}

export default App
