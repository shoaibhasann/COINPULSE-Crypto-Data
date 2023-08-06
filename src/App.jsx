import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Coin from './pages/Coin';
import Navbar from './components/Navbar';


function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path=":coinId" element={<Coin />}/>
      </Routes>
    </Router>
  )
}

export default App
