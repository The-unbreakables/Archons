import axios from 'axios'
import React,{useState} from 'react'

export const Register = () => {
    const [name,SetName] = useState('')
    const [email,SetEmail] = useState('')
    const [password,SetPassword] = useState('')
  return (
    <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
    <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
    <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

    <div class="card" style={{backgroundColor: '#c2b6b6',
backgroundImage: 'linear-gradient(315deg, #c2b6b6 0%, #576574 74%)'
}}>
      <div class="card-body px-4 py-5 px-md-5">
        <form>
          <div class="row">
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example1">Name</label>
                <input type="text" class="form-control" onChange={(e)=>{SetName(e.target.value)}} value={name} />
              </div>
          </div>

          <div class="form-outline mb-4">
          <label class="form-label" for="form3Example3">Email address</label>
            <input type="email" class="form-control" onChange={(e)=>{SetEmail(e.target.value)}} value={email}/>
          </div>

          <div class="form-outline mb-4">
          <label class="form-label" for="form3Example4">Password</label>
            <input type="password" class="form-control" onChange={(e)=>{SetPassword(e.target.value)}} value={password}/>
            
          </div>

          <button type="submit" class="btn btn-dark btn-block mb-4 sketch-button">
            Sign up
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export const Login = () => {
    const [email,SetEmail] = useState('')
    const [password,SetPassword] = useState('')
    const LoginHandler =(e)=>{
        e.preventDefault()
        axios.post('/api/auth/login',{
            email,password
        }).then((res)=>{
            alert(res.data.message)

        }).catch(err=>{
            alert(err);
        })
    }
  return (
    <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
    <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
    <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

    <div class="card" style={{backgroundColor: '#c2b6b6',
backgroundImage: 'linear-gradient(315deg, #c2b6b6 0%, #576574 74%)'}}>
      <div class="card-body px-4 py-5 px-md-5">
        <form onSubmit={LoginHandler}>
        
          <div class="form-outline mb-4">
          <label class="form-label" for="form3Example3">Email address</label>
            <input type="email" class="form-control" onChange={(e)=>{SetEmail(e.target.value)}} value={email}/>
            </div>

          <div class="form-outline mb-4">
          <label class="form-label" for="form3Example4">Password</label>
            <input type="password" class="form-control" onChange={(e)=>{SetPassword(e.target.value)}} value={password}/>
            </div>

          <button type="submit" class="btn btn-dark btn-block mb-4 sketch-button">
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}
