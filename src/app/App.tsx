import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthPage from "../components/Pages/AuthPage/AuthPage";
import NotFound from "../components/Pages/NotFound/NotFound";
import Header from "../components/common/Header/Header";
import HomePage from "../components/Pages/HomePage/HomePage";
import PrivateRoute from "../components/common/PrivateRoute/PrivateRoute";


function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={"/home"}
                       element={
                           <PrivateRoute>
                               <HomePage/>
                           </PrivateRoute>
                       }
                />
                <Route index element={<AuthPage/>}/>
                <Route path={"/*"} element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
