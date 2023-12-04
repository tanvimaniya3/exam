import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute(props) {

    let data = localStorage.getItem("isLogin")
  return data ? props.children : <Navigate to={"/login"}></Navigate>
}

export default PrivateRoute
