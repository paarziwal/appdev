import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Login.css';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import NavBar from '../components/Navbar';
import axios from 'axios';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

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

  // eslint-disable-next-line no-unused-vars
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.email.trim() === '') {
      isValid = false;
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      isValid = false;
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.password.trim() === '') {
      isValid = false;
      newErrors.password = 'Password is required';
    } else if (!isValidPassword(formData.password)) {
      isValid = false;
      newErrors.password =
        'Password must be at least 8 characters long and include 1 special character and 1 digit';
    }

    setErrors(newErrors);
    return isValid;
  };

  const isValidEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const isValidPassword = (input) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (!validateForm()) {
      return; // Don't proceed if the form is not valid
    }

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
        email: formData.email,
        password: formData.password,
      });

      console.log(response.data.message);
      // Dispatch the login action
      dispatch(login({ email: formData.email, ...response.data.user }));
      navigate('/profile');
      
    } catch (error) {
      if (error.response && error.response.data) {
        console.error(error.response.data);
        setErrorMessage(error.response.data.message || "An error occurred");
      } else if (error.request) {
        console.error(error.request);
        setErrorMessage("Request error");
      } else {
        console.error('Error', error.message);
        setErrorMessage("Unknown error occurred");
      }
    }
  };

  return (
    <>
      <div className="whole">
        <header>
          <NavBar />
        </header>
        <div className="Landing">
          <div className="showcase">
            <img
              src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="..."
            />
            <div className="login-box">
              <form>
                <h2>Login</h2>
                <div className="input-box">
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
                <br></br>
                <button type='button' onClick={handleSubmit}>
                  Login
                </button>
                {errorMessage && (
                  <div className="error-message">
                    {errorMessage}
                  </div>
                )}
                <div className="register-link">
                <p>
                    If Admin? <a href="/adminlogin">AdminLogin</a>
                  </p>
                  <p>
                    Dont have an account? <a href="/registration">Register</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
