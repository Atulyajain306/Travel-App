import './App.css';
import Dasboard from './components/Dasboard.jsx';
import Onboarding from './components/Onboarding.jsx';
import { Navigate,Route,Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/UseAuthcontext.jsx';
function App() {
    const {change}=useAuthContext();
  return (
    <div className='bg-black'>
     <div className=' w-[393px] h-[810px] bg-[#0B0809] relative left-[650px]' >
      <Routes>
        <Route path="/" element={ change ? <Navigate to="/dashboard" /> : <Onboarding /> }/>
        <Route path="/dashboard" element={<Dasboard />} />
      </Routes>
      <Toaster reverseOrder={true} />
     </div></div>
  );
}

export default App;
