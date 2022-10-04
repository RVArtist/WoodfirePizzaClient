import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userAction";

export default function Registerscreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const dispatch = useDispatch();
  function register() {

    if(password !== confirmpassword)
    {
      alert('passwords do not match')
    }
    else{
      const user = {name, email, password}
      console.log(user);
      dispatch(registerUser(user))
    }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-end">
          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Register
          </h2>
          <div>
            <input
              required 
              type="text" 
              placeholder="Name" 
              className="form-control"
              value={name}
              onChange={(e) => {setName(e.target.value)}}
            />
            <input
              required
              type="text" 
              placeholder="email" 
              className="form-control"
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
            />
            <input
              required
              type="text"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => {setPassword(e.target.value)}}
            />
            <input
              required
              type="text"
              placeholder="Confirm Password"
              className="form-control"
              value={confirmpassword}
              onChange={(e) => {setConfirmpassword(e.target.value)}}
            />
            <button onClick={register} className="btn mt-3">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
