import React from 'react'
import { useState } from 'react';
import { auth } from '../config/Config';
import { Link} from 'react-router-dom';
import '../App'; 


export const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = (e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then(()=>{
      setEmail('');
      setPassword('');
      setError('');
      props.history.push('/');
    }).catch(err => setError(err.message));
  }

  return (
    <div className='container'>
      <br/>
      <h2>Login</h2>
      <hr/>
      <form autoComplete='off' className='form-group' onSubmit={login}>
        <label htmlFor='Email'>Email</label>
        <br/>
        <input type='email' className='form-control' required
        onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <br/>
        <label htmlFor='Password'>Password</label>
        <br/>
        <input type='password' className='form-control' required
        onChange={(e)=>setPassword(e.target.value)} value={password}/>
        <br/>
        <button type='submit' className='btn btn-success btn-md mybtn'>LOGIN</button>
      </form>
      {error && <div className='error-msg'>{error}</div>}
      <br/>
      <span>Dont have an account? Register
        <Link to={'../signup'}>Here</Link>
      </span>
    </div>
  )
}

export default Login
