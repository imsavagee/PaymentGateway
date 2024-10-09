import React, { useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'

function Login() {
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const navigate =useNavigate();

    function formdata(e){
        e.preventDefault()
        navigate("/PaymentGateway/home")
    //    if(email&&pass){
    //     console.log(email+" : "+pass)
    //     navigate("/PaymentGateway/home")
    //    }else{
    //     navigate("/")
    //     alert("Enter a valid Email or Password")
    //    }
        
       
    }
    return (
        <>
            <div style={{textAlign:"center",marginTop:"15%"}}> 
                <div>
                    <h1>Welcome To My World</h1>
                </div>
                <div>
                    <form method="post" onSubmit={formdata}>
                        <label>Email</label> <br/>
                        <input id='email' name="email" type='email' placeholder='Email...' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
                        <label>Password</label><br/>
                        <input id='pass' name="pass" type='password' placeholder='Password...' value={pass}  onChange={(e)=>setPass(e.target.value)} /><br/>
                        <input type='submit' value="LOGIN"  /><br/>
                      
                    </form>
                </div>
            </div>
        </>

    )
}

export default Login