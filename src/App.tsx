import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Phrase from './Phrase';
import Lokalise from './Lokalise';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phrase" element={<Phrase />} />
        <Route path="/lokalise" element={<Lokalise />} />
        {/* <Route path="/phrase" element={<Phrase />} />
        <Route path="/phrase" element={<Phrase />} /> */}
      </Routes>
      </div>
  )
}

export default App