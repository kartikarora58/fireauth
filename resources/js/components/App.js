import React,{useState, useEffect} from 'react';
import axios from 'axios';
const firebase=require('firebase');
function App()
{
    const [phone,setPhone]=useState(null);
    //const [token,setToken]=useState(null);

useEffect(()=>{
    window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier("recaptcha-container",{
        size:'invisible',
      })
},[]);

const  handleSubmit=()=>{
    // let recaptcha=new firebase.auth.RecaptchaVerifier('recaptcha');
    let number='+91'+phone;
    let captcha=window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(number,captcha)
      .then(function(e){
        let code=prompt("enter OTP");
        e.confirm(code)
          .then(result=>
                //setToken(result.user.getIdToken())
                //console.log(result.user.getIdToken())
                handleLogin(result.user.getIdToken())
            )
          .catch(err=>console.log(err))
      })
      .catch(error=>console.log(error))
  }
  const handleLogin=async(token)=>{
        console.log(token)
        let headers={Authorization:'Bearer'+token}
        let me=await axios.get('/fireauth/public/api/me',{headers})
        console.log(me);
  }
 
    return (
      <div className="App">
        <div id="recaptcha"></div>
          <input 
          type="text" 
          onChange={(e)=>setPhone(e.target.value)}
          />
          <button id="recaptcha-container" onClick={()=>handleSubmit()}>submit</button>
      </div>
    );
  
  
}

export default App;
