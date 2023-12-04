import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Pages from '../pages/Pages'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Singal from '../pages/Singal'
import Form from '../pages/Login'
import  Products from '../pages/Products'
import PrivateRoute from '../components/PrivateRoute'

function MainRouter() {
    return (
        <div>
            <Routes>
                <Route path='/' element={
                   <PrivateRoute><Home/></PrivateRoute>
                }></Route>
                <Route path='/:id' element={<Products/>}></Route>
               
                <Route path='/Login' element={<Form/>}></Route>
                <Route path='/Pages' element={<Pages/>}></Route>
                <Route path='/Blog' element={<PrivateRoute><Blog/></PrivateRoute>}></Route>
                <Route path='/Contact' element={<Contact/>}></Route>
                <Route path='/Blog/:id' element={<Singal/>}></Route>
                
            </Routes>
        </div>
    )
}

export default MainRouter