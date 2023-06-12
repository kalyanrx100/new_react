import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import EmpData from './Components/EmpData';
import EmpUpdate from './Components/EmpUpdate'
import EmpNew from './Components/EmpNew';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/ed' element={<EmpData/>}></Route>
      <Route path='/eu' element={<EmpUpdate/>}></Route>
      <Route path='/en' element={<EmpNew/>}></Route>
    </Routes>
    </>
  );
}

export default App;
