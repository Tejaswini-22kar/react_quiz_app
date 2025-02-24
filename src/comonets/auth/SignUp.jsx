import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [signupdata, setSignupdata] = useState({
    unme: "",
    uemail: "",
    pass: "",
    cpass: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  function inputHandler(e) {
    const { name, value, type, checked } = e.target;
    setSignupdata((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  function Signuphandler(e) {
    e.preventDefault();
  
    let validationErrors = {};
  
    if (!signupdata.unme.trim()) validationErrors.unme = "Full name is required.";
    if (!signupdata.uemail.trim()) {
      validationErrors.uemail = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupdata.uemail)) {
      validationErrors.uemail = "Invalid email format.";
    }
  
    if (!signupdata.pass) {
      validationErrors.pass = "Password is required.";
    } else if (signupdata.pass.length < 6) {
      validationErrors.pass = "Password must be at least 6 characters.";
    }
  
    if (!signupdata.cpass) {
      validationErrors.cpass = "Confirm password is required.";
    } else if (signupdata.pass !== signupdata.cpass) {
      validationErrors.cpass = "Passwords do not match.";
    }
  
    if (!signupdata.terms) {
      validationErrors.terms = "You must agree to the terms.";
    }
  
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      // Get existing users from localStorage (if any)
      let users = JSON.parse(localStorage.getItem("users")) || [];
  
      // Check if the email already exists
      const emailExists = users.some(user => user.uemail === signupdata.uemail);
      if (emailExists) {
        alert("Email already registered! Please use another email.");
        return;
      }
  
      // Add new user to the array
      users.push(signupdata);
  
      // Save updated users array to localStorage
      localStorage.setItem("users", JSON.stringify(users));
  
      alert("Sign-up successful!");
      navigate("/login");
    }
  }
  

  return (
    <div className="container">
      <div className="sign-up-container">
        <h3 className="text-center">Create an Account</h3>
        <form onSubmit={Signuphandler}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="unme"
              placeholder="Enter your full name"
              value={signupdata.unme}
              onChange={inputHandler}
            />
            {errors.unme && <small className="text-danger">{errors.unme}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="uemail"
              placeholder="Enter your email"
              value={signupdata.uemail}
              onChange={inputHandler}
            />
            {errors.uemail && <small className="text-danger">{errors.uemail}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="pass"
              placeholder="Enter your password"
              value={signupdata.pass}
              onChange={inputHandler}
            />
            {errors.pass && <small className="text-danger">{errors.pass}</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="cpass"
              placeholder="Confirm your password"
              value={signupdata.cpass}
              onChange={inputHandler}
            />
            {errors.cpass && <small className="text-danger">{errors.cpass}</small>}
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="terms"
              name="terms"
              checked={signupdata.terms}
              onChange={inputHandler}
            />
            <label className="form-check-label" htmlFor="terms">
              I agree to the <a href="#">Terms & Conditions</a>
            </label>
            {errors.terms && <small className="text-danger d-block">{errors.terms}</small>}
          </div>

          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
          <div className="text-center mt-3">
            <p>Already have an account? <Link to="/signin">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
