import { Link } from "react-router-dom";
import "../../assets/css/Lander.css";

function Lander() {
  return (
    <div className="homeout">
      <div className="homein">
        <header className="homehead">
          <h1>Welcome to Edu Connect</h1>
          <p>Where dreams meet opportunities</p>
          <div className="btn-group">
            <Link to="/educonnect/user/college" className="btn bigger">View Institute</Link>
            <Link to="/educonnect/user/courses" className="btn bigger">View Courses</Link>
            <Link to="/educonnect/user/apply" className="btn bigger">Add Student Profile</Link>
            <Link to="#" className="btn bigger">Check Admission Details</Link>
            <Link to="#" className="btn bigger">Make Payments</Link>
            <Link to="#" className="btn bigger">Payment History</Link>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Lander;
