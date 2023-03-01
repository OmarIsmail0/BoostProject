import { useState } from 'react'

import './index.css'
import Background from './components/HomeComponents/BackgroundSlider'
import Home from './pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Background /> */}
      <Home />
    </div>
  )
}

export default App
