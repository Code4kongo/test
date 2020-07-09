import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default function AsUser(props) {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [gender, setGender] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [ agreeTermCondition, setAgreeTermCondition ] = useState(false)
  const [ userCreated, setUserCreated ] = useState(false)


  const handleSubmit = event => {

    event.preventDefault()
    if(password !== repeatPassword && !agreeTermCondition){
      return alert("Your password must match and agree term and conditon")
    }     
    const newUser =  {
        username: "",
        password,
        picture: "",
        country,
        age: 0,
        name,
        gender,
        company: "",
        email,
        phone: "",
        address: "",
        about:  "",
        info: {
            overview : "",
            experience : ""
        },
        education: "",
        skills: [],
        portfolio: [],
        socialmedialink: []
      }
    console.log(newUser)
    
    axios.post('http://localhost:8080/user/signup', newUser)
        .then(res => {
            let user = res.data.createduser
            setUserCreated(true)
            console.log(user)
            
        })
         .catch(error => console.log(error))
    
}
    const style = {
        color: "#fff",
        backgroundColor: "#17a2b8",
        borderColor: "#17a2b8"
      }

  if(userCreated){
    return  <Redirect to="/" />
  }else {
    return (
        <div className="dff-tab current" id="tab-3">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input type="email"  placeholder="email " value={email} onChange={event => setEmail(event.target.value)}/>
                  <i className="la la-user"></i>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input type="text"  placeholder="Full-name " value={name} onChange={event => setName(event.target.value)}/>
                  <i className="la la-user"></i>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input type="text" placeholder="Country" value={country} onChange={event => setCountry(event.target.value)}/>
                  <i className="la la-globe"></i>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <select defaultValue={gender} onChange={(event => setGender(event.target.value))}>
                    <option>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <i className="la la-dropbox"></i>
                  <span>
                    <i className="fa fa-ellipsis-h"></i>
                  </span>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input type="password"  placeholder="Password" value={password} onChange={event => setPassword(event.target.value)}/>
                  <i className="la la-lock"></i>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="sn-field">
                  <input type="password"  placeholder="Repeat Password" value={repeatPassword} onChange={event => setRepeatPassword(event.target.value)}/>
                  <i className="la la-lock"></i>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <div className="checky-sec st2">
                  <div className="fgt-sec">
                    <input type="checkbox" name="cc" id="c3" value={agreeTermCondition} onChange={event => {setAgreeTermCondition(true)}}/>
                    <label htmlFor="c2">
                      <span></span>
                    </label>
                    <small>
                      Yes, I understand and agree to the workwise
                      Terms & Conditions.
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 no-pdd">
                <button type="submit" value="submit" style={style}>
                  Get Started
                </button>
              </div>
            </div>
          </form>
      </div>
  )
  }

    
}
