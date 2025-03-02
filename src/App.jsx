import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loginpage from './Pages/Loginpage/Loginpage'
import Routers from './Routes/Route/Route'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routers/>
    </>
  )
}

export default App
