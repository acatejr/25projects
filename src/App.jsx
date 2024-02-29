import { useState } from 'react'
import './App.css'
import StarRating from './components/star-rating'
// import Accordian from './components/accordian'
// import RandomColor from './components/random-color'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      <StarRating numStars={10} />
    </div>
  )
}

export default App
