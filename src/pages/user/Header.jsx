

import '../../assets/css/Header.css'; // Import the CSS file for styling
import pic from "../../assets/images/univlogo.png"

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1 className="logo-title">
        <img src={pic} alt="EduConnect" />
        EDUCONNECT</h1>
      </div>
      <nav>
        <ul>
          <li><a href="/educonnect/user/home">Home</a></li>
          <li><a href="/educonnect/user/courses">Courses</a></li>
          <li><a href="/educonnect/user/profile">Profile</a></li>
          <li class="logo-item">
          <div class="main">
          <div class="main__container">
          <div class="div__punto"></div>
          </div>
          <div class="main_container__2"></div>
          </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
