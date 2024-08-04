import React from 'react'
import LoginScreen from './components/LoginScreen'
import StudentScreen from './components/StudentScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminScreen from './components/AdminScreen';
import Events from './components/Events'
import StudentResults from './components/StudentResults';
import StudentPaiements from './components/StudentPaiements';
import StudentEvent from './components/StudentEvent';
import LoginForgotPasword from './components/LoginForgotPasword';
import StudentHoraires from './components/StudentHoraires';
import StudentProfil from './components/StudentProfil';
import AdminProfile from './components/AdminProfile';
import AdminGestionEtudiants from './components/AdminGestionEtudiants';
import AdminGestionComptes from './components/AdminGestionComptes';
import AdminContentGestionFrais from './components/AdminContentGestionFrais';
import AdminGestionFrais from './components/AdminGestionFrais';
import AdminGestionCoupon from './components/AdminGestionCoupon';
import AdminDB from './components/AdminDB';
import AdminEmail from './components/AdminEmail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginScreen />}/>
        <Route path='/student' element={<StudentScreen/>}/>
        <Route path='/admin' element={<AdminScreen/>}/>
        <Route path='/result' element={<StudentResults/>}/>
        <Route path='/paiements' element={<StudentPaiements/>}/>
        <Route path='/event' element={<StudentEvent/>}/>
        <Route path='/password' element={<LoginForgotPasword/>}/>
        <Route path='/profilStudent' element={<StudentProfil/>}/>
        <Route path='/horaires' element={<StudentHoraires/>}/>
        <Route path='/profilAdmin' element={<AdminProfile/>}/>
        <Route path='/gestionStudent' element={<AdminGestionEtudiants/>}/>
        <Route path='/gestionComptes' element={<AdminGestionComptes/>}/>
        <Route path='/gestionFrais' element={<AdminGestionFrais/>}/>
        <Route path='/gestionCoupon' element={<AdminGestionCoupon/>}/>
        <Route path='/fillDB' element={<AdminDB/>}/>
        <Route path='/email' element={<AdminEmail/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App