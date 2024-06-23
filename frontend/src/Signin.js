import React from 'react';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css';
import api from'./api.js'

const Signin = ({ state, setState }) => {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  
  console.log('before')
  console.log(state)
  console.log(' ')

  const handleSubmit=async()=>{
    try{
      let response=await api.get('/users')
      console.log(response)
      if(!response.statusText) throw new Error("Databse get error")
      let data= response.data;

      console.log(data[0].email);
      console.log(data[0].password)
      navigate('/Welcome')
    }
    catch(e){
      console.log(e.message);
    }
  }



  return (
    <div>
      <form onSubmit={handleSubmit} >
        <h1>Account</h1>
        <input
          type='email'
          placeholder='EMAIL'
          value={Email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <br />
        <input
          type='password'
          placeholder='PASSWORD'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <br />
        <input type='submit' placeholder='submit'/>
        <br />
        <button type='button'>SignUP</button>
      </form>
    </div>
  );
};

export default Signin;
