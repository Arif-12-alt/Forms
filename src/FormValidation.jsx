import React, { useState } from "react";
import "./App.css"
import { Link } from "react-router-dom";

function Signup(){
    const [Name,setName]=useState('');
    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState('');
    const [RPassword,setRPassword]=useState('');
    const [message,setmessage]=useState('');
    const [Nameerror,setNameerror]=useState('');
    const [Lasterror,setLasterror]=useState('');
    const [Emailerror,setEmailerror]=useState('');
    const [Passworderror,setPassworderror]=useState('');
    const [RPassworderror,setRPassworderror]=useState('');
    
    const handleSignup=()=>{
    let isValid = true;
    if(!Name){
        setNameerror("Name Required!");
        isValid=false;
    }
    else if(Name.length<=3){
    setNameerror("Name is Short!");
    isValid=false;
    }
    else{
    setNameerror('');
    }
    if (!Email) {
      setEmailerror('Email Required!');
      isValid=false;
      } 
     else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/) {
            setEmailerror('Invalid email address');
            isValid=false;
          }
          else{
            setEmailerror('');
          }
    
    if(!Password){
        setPassworderror("Password Required!");
        isValid=false;
    }
    else if(Password.length<=6){
        setPassworderror('Password Must be 6 Or More Letters!');
        isValid=false;  
    }
    else{
        setPassworderror('');
    }
    if(Password!==RPassword){
        setRPassworderror("Password Not Matching!");
        isValid=false;
    }
    else{
        setRPassworderror('');
    }
    if(isValid){
        setmessage('Submit Successfully')
    }
    else{
        setmessage('');
    }
    }
    return(
        <>
    <form class="form">
        <p class="title">Register </p>
        <p class="message">Signup now and get full access to our app. </p>
            <label>
                <input required="" placeholder="First Name" type="text" class="input" value={Name} onChange={(e)=>setName(e.target.value)}/>
            </label>
             <div className="error">{Nameerror}</div>            
        <label>
            <input required="" placeholder="Email" type="email" class="input" value={Email} onChange={(e)=>setEmail(e.target.value)}/>
        </label> 
          <div  className="error">{Emailerror}</div>  
        <label>
              <input required="" placeholder="Password" type="password" class="input" value={Password} onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        <div  className="error">{Passworderror}</div>
        <label>
            <input required="" placeholder="Confirm Password" type="password" className="input" value={RPassword} onChange={(e)=>setRPassword(e.target.value)}/>
        </label>
        <div  className="error">{RPassworderror}</div>
        <div>{message}</div>
       <center> <Link><button className="submit" onClick={handleSignup}>Submit</button></Link></center>
        <p class="signin">Already have an acount ? <a href="#">Signin</a> </p>
    </form>
    
    </>
    );
    }
    export default Signup;                                                                                                                                                                                                                                                     
    
    
    
                                                                                                                                                                                                                                                        
    
    
    
    