import { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios
import '../assets/css/Enroll.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function PaymentConfirmationPopup({ onClose, onConfirm }) {
  
  return (
    <div className="popup-container">
      <div className="popup">
        <p>Do you want to proceed with the payment?</p>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
PaymentConfirmationPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};


function PaymentDetailsPopup({ onClose, onPay }) {
  return (
    <div className="payment-details-popup-container">
      <div className="payment-details-popup">
        <p>Payment Details:</p>
        <div className="form-group">
          <label style={{color:'black'}} htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" />
        </div>
        <div className="form-group">
          <label style={{color:'black'}} htmlFor="expirationDate">Expiration Date:</label>
          <input type="text" id="expirationDate" name="expirationDate" placeholder="MM/YYYY" />
        </div>
        <div className="form-group">
          <label style={{color:'black'}} htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" placeholder="123" />
        </div>
        <div className="form-group">
          <label style={{color:'black'}} htmlFor="amount">Amount:</label>
          <input type="number" id="amount" name="amount" placeholder="Enter amount" />
        </div>
        <div className="button-container">
          <button onClick={onPay} className="pay-button">Pay</button>
          <button onClick={onClose} className="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  );
}
PaymentDetailsPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onPay: PropTypes.func.isRequired,
};






function Enroll({ onClose, onEnroll, selectedCourse }) {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [showPaymentConfirmationPopup, setShowPaymentConfirmationPopup] = useState(false);
  const [showPaymentDetailsPopup, setShowPaymentDetailsPopup] = useState(false);
  const [studentId, setStudentId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const courseId = selectedCourse.courseId; // Assuming courseId is a property of selectedCourse

      // Send enrollment data to the backend with parameters in the URL
      const response = await axios.post(
        `http://localhost:8080/admissions?studentId=${studentId}&courseId=${courseId}`,
        { status: "Pending" }
      );

      console.log('Enrollment successful:', response.data);

      setIsEnrolled(true);
      onEnroll(); // Trigger the enrollment action
    } catch (error) {
      console.error('Enrollment failed:', error.message);
      // Handle error (e.g., show an error message to the user)
    }
  };

  const handleMakePayment = () => {
    setShowPaymentConfirmationPopup(true);
  };

  const handlePaymentConfirmation = (confirmed) => {
    if (confirmed) {
      setShowPaymentConfirmationPopup(false);
      setShowPaymentDetailsPopup(true);
    }
  };

  const handlePaymentDetailsConfirmation = () => {
    setShowPaymentDetailsPopup(false);
    alert('Payment successful');
    onClose(); // Close the enrollment form after payment
  };
  return (
    <div className="enroll-box">
      <form onSubmit={handleSubmit} className="enroll-form">
        <br />
        <br />
        <h2 style={{ color: 'white', textAlign: 'center' }}>ENROLLMENT FORM</h2>
        <br />
       
        <div className="form-group">
          <label htmlFor="studentId">StudentId:</label>
          <input
            type="text"
            id="collegeName"
            name="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseName">CourseName:</label>
          <input type="text" id="courseName" name="courseName" readOnly value={selectedCourse.courseName} />
        </div>
        <div className="form-group">
          <label htmlFor="courseDuration">Duration:</label>
          <input type="text" id="courseDuration" name="courseDuration" readOnly value={selectedCourse.courseDuration} />
        </div>
        <div className="form-group">
          <label htmlFor="noOfSeats">NoOfSeats:</label>
          <input type="text" id="noOfSeats" name="noOfSeats" readOnly value={selectedCourse.noOfSeats} />
        </div>
        <div className="form-group">
          <label htmlFor="courseFee">CourseFee:</label>
          <input type="text" id="courseFee" name="courseFee" readOnly value={selectedCourse.fees} />
        </div>
        <br />
        <button type="submit" className="enroll-button">
          Enroll
        </button>
        {isEnrolled && (
          <>
            <button type="button" onClick={handleMakePayment} className="make-payment-button">
              Make Payment
            </button>
          </>
        )}
        <Link to="/profile" style={{ color: 'blueviolet' }}>
          Go to Profile
        </Link>
      </form>
      {showPaymentConfirmationPopup && (
        <PaymentConfirmationPopup
          onClose={() => setShowPaymentConfirmationPopup(false)}
          onConfirm={() => handlePaymentConfirmation(true)}
        />
      )}
      {showPaymentDetailsPopup && (
        <PaymentDetailsPopup
          onClose={() => setShowPaymentDetailsPopup(false)}
          onPay={handlePaymentDetailsConfirmation}
        />
      )}
    </div>
  );
}

Enroll.propTypes = {
  onClose: PropTypes.func.isRequired,
  onEnroll: PropTypes.func.isRequired,
  selectedCourse: PropTypes.object, // Pass selected course as a prop
};

export default Enroll;