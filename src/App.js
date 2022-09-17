import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";

import About from './Pages/About/About';

import Homepage from './Pages/Home/Banner/Homepage/Homepage';
import { UserAuthContextProvider } from './context/UserAuthContext';
import PhoneSignUp from './Pages/signUp/PhoneSignUp';



function App() {
  return (
    <div>

<Navbar></Navbar>
<Routes>
         
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About/>}/>
        <Route path="signup" element={
          <UserAuthContextProvider>
                <PhoneSignUp></PhoneSignUp>
              </UserAuthContextProvider>
        }/>
     
      </Routes>

      
     
       
     
     

        
       
        
       
       

        
        
        
    </div>
  );
}

export default App;
