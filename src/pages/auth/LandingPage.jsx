import "../../assets/css/LandingPage.css"
import univlogo from "../../assets/images/univlogo.png"
const handleClick = () => {
    window.location.href = 'educonnect/login';
  };
// const handleClick1 = () => {
//     window.location.href = 'educonnect/login';
//   };
const LandingPage = () => {
  return (
    <div className="title">
      <h1>
        <img src={univlogo} width="200" height="100"></img>
  EDUCONNECT
        </h1>
      <div className="button">
        <button onClick={handleClick}>User</button>
        <button>Admin</button>
      </div>
    </div>
  );
};

export default LandingPage;
