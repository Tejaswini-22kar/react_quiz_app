import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [signupdata, setSignupdata] = useState({
    uemail: "",
    pass: "",
  });

  function inputHandler(e) {
    const { name, value } = e.target;
    setSignupdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  const loginHanderl = (e) => {
    e.preventDefault();
    
    // Retrieve all users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Find a user that matches the entered credentials
    const matchedUser = users.find(user => 
      user.uemail === signupdata.uemail && user.pass === signupdata.pass
    );
  
    if (matchedUser) {
      alert("Login successful!");
      navigate("/quiz");
    } else {
      alert("Wrong email or password");
    }
  };
  

  return (
    <>
      <div className="container">
        <div className="sign-in-container">
          <h3 className="text-center">Sign In</h3>
          <form onSubmit={loginHanderl}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input 
                type="email"
                name="uemail"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
                onChange={inputHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                name="pass"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                required
                onChange={inputHandler}
              />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <button type="submit" className="btn btn-primary w-100">Sign In</button>
            <div className="text-center mt-3">
              <a href="#">Forgot password?</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
