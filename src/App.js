import { Routes,Route } from 'react-router-dom';
import Dash from './components/Dash';
import Navbar from './components/Navbar';
import SigninCandidate from './components/SigninCandidate';
function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Dash/>} />
      <Route path="signin" element={<SigninCandidate/>} />
    </Routes>
    </div>
  );
}

export default App;
