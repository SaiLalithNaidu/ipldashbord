import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/index'
import TeamMatches from './components/TeamMatches/index'
import NotFound from './components/NotFound/index'

const App = () => (
  <Router>
    <div className="dashbordImage">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team-matches/:id" element={<TeamMatches />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </Router>
)

export default App
