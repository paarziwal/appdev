
import '../../assets/css/Login.css';
import { Link } from 'react-router-dom';

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const handleClick = () => {
    window.location.href = 'user/home';
  };

  return (
    <div className="login-container">
      <div className="background-image" />
      <div className="form-container">
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <div className="form-group">
            <button type="button" className="signInButton" onClick={handleClick}>
      Sign In
    </button>
          </div>
        </form>
        <div className="links">
          <a href="#">Forgot password?</a>
          <p></p>
          <Link to="/educonnect/register">Sign Up?</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
