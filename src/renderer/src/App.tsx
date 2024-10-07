import { Routes, Route, HashRouter } from 'react-router-dom'
import Home from './components/Home'
import Test from './components/Test'

function App(): JSX.Element {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
