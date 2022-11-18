import React from 'react';
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home.jsx';
import { GiveAway } from './pages/give-away.jsx';
import { LogIn } from './pages/login.jsx';
import { LogOut } from './pages/logout.jsx';
import { SignUp } from './pages/sign-up.jsx';


export default function App() {
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