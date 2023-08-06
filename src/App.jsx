import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Coin from './components/Coin';
import Navbar from './components/Navbar';
import Exchange from './components/Exchange';
import Coindetail from './components/Coindetail';
import Loader from './components/Loader';


function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin" element={<Coin />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/coin/:id" element={<Coindetail />} />
      </Routes>
    </Router>
  )
}

export default App
