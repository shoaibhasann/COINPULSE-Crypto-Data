import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Coin from './components/Coin';
import Navbar from './components/Navbar';
import Exchange from './components/Exchange';
import CoinDetail from './components/Coindetail';

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin" element={<Coin />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/coin/:id" element={<CoinDetail />} />
      </Routes>
    </Router>
  )
}

export default App
