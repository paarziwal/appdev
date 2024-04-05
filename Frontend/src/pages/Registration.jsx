import { useState } from 'react';
import '../assets/css/Registration.css';
import { Checkbox } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', formData);
      console.log('Registration successful:', response.data);
      
      // Redirect to login page after successful registration
      navigate("/login");
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error appropriately (e.g., show an error message to the user)
    }
  };

  return (
    <>
      <div className="whole">
        <div className="Landing">
          <center>
            <div className="showcase">
              <img
                src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="..."
              />

              <div className='rd2'>
                <form onSubmit={handleSubmit}>
                  <br></br>
                  <h2>Welcome onboard!!!</h2>

                  <div className="input-box1">
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <label>Name</label>
                    {errors.username && <p className='error-message'>{errors.username}</p>}
                  </div>

                  <div className="input-box1">
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label>Email</label>
                    {errors.email && <p className='error-message'>{errors.email}</p>}
                  </div>

                  <div className="input-box">
                    <input
                      type='password'
                      name='password'
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <label>Password</label>
                    {errors.password && <p className='error-message'>{errors.password}</p>}
                  </div>

                  <div className="input-box">
                    <input
                      type='password'
                      name='confirmPassword'
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                    <label>Confirm Password</label>
                    {errors.confirmPassword && (
                      <p className='error-message'>{errors.confirmPassword}</p>
                    )}
                  </div>

                  <div className="register-link">
                    <Checkbox />
                    {" "}
                    By agreeing to the Terms of Service and Privacy Policy
                  </div>

                  <button type="submit">Register</button>

                  <div className="register-link">
                    <p>Already have an account? <a href="/login">Login</a></p>
                  </div>
                </form>
              </div>
            </div>
          </center>
        </div>
      </div>
    </>
  );
}

export default Registration;
