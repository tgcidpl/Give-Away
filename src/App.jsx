import React from 'react';
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home.jsx';
import { GiveAway } from './pages/give-away/give-away.jsx';
import { LogIn } from './pages/login/Login.jsx';
import { LogOut } from './pages/logout/Logout.jsx';
import { SignUp } from './pages/sign-up/sign-up.jsx';


function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/give-away' element={<GiveAway />}/>
                <Route path='/login' element={<LogIn />}/>
                <Route path='/logout' element={<LogOut />}/>
                <Route path='/sign-up' element={<SignUp />}/>
            </Routes>
        </Router>
    )
}

export default App
