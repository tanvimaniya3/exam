
import React, { useEffect, useState } from 'react';

function Form() {
    let [username, setUsername] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [lemail, setLemail] = useState("")
    let [lpassword, setLpassword] = useState("")
    let [Form, setForm] = useState("Login")
    let [user, setUser] = useState(JSON.parse(localStorage.getItem("users")) || [])

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(user))
    }, [user])

    const handlesignup = (e) => {
        e.preventDefault();
        if (email.length >= 5 && password.length >= 8) {
            setUser([...user, { email, password }])
            setForm("Login")
        }
        else {
            alert("Enter valid Information!")
        }
    }

    const handlelogin = (e) => {
        e.preventDefault();
        if (lemail == email&& lpassword == password) {
            alert("Login Succesfully!");
            localStorage.setItem("isLogin",true)
        }
    }
    return (
        <div className='loginf'>
            <div className='mb-5 mt-5 pt-5 outline-dark'>
                {
                    Form == "Login" ?
                        <div className='m-5 p-5'>
                            <form id='login' onSubmit={handlelogin}>
                                <h1 className='text-secondary'>Login Your Account</h1><br />
                                <input type="email" placeholder='Enter Email' onChange={(e) => setLemail(e.target.value)} /><br />
                                <br />
                                <input type="password" placeholder='Enter Password' onChange={(e) => setLpassword(e.target.value)} /><br />
                                {lpassword.length >= 8 ? (<span style={{ color: "green" }}>Valid Password</span>) :
                                    (<span style={{ color: "red" }}>Enter 8 digits!</span>)}<br /><br />
                                <button className='btn btn-dark' onClick={handlelogin}>Login</button><br />
                                <span onClick={() => setForm("Signup")} className='btn btn-dark'>Create New Account</span>
                            </form>
                        </div>
                        :
                        <div className='m-5 p-5'>
                            <form id='signup' onSubmit={handlesignup}>
                                <h1 className='text-secondary'>Create a new Account!</h1><br />
                                <input type="text" placeholder='Enter User Name' onChange={(e) => setUsername(e.target.value)} /><br />
                                {username.length >= 3 || username.length == 0 ? null :
                                    (<span style={{ color: "red" }}>Invalid User Name!</span>)}
                                <br />
                                <input type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} /><br /><br />
                                <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} /><br />{password.length >= 8 ? (<span style={{ color: "green" }}>Valid Password</span>) :
                                    (<span style={{ color: "red" }}>Enter 8 digits!</span>)}<br /><br />
                                <button className='btn btn-dark'>Signup</button>
                            </form>
                            <button onClick={() => setForm("Login")} className='me-3 btn btn-dark'>Login Now</button>
                        </div>
                }

            </div>
        </div>
    )
}

export default Form