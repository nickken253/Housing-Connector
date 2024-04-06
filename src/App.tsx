import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Img } from './assets'
import './App.css'

import Headers from './components/header/Header'
import {Card} from './components/card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headers />
      <Card 
        title="Card 1"
        description="Description 1"
        image="https://vignette.wikia.nocookie.net/oggyandthecockroaches/images/e/ea/Oggy's_House.png/revision/latest?cb=20180430192556"
      /> 
    </>
  )
}




export default App
