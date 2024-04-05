// import React from "react";
// import './footer.css';
import '../assets/css/Footer.css';
const Footer = () => {
  return (
    <>
<footer className="footer-distributed">

			<div className="footer-left">

				<h3 id="fcompany">Edu Connect</h3>

				<p className="footer-links">
				Gateway to Educational Success!!
				</p>

				<p className="footer-company-name">Edu Connect © 2023</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>123, ABC Street</span>Kuniamuthur,Coimbatore</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+91 6382641698</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">abc@gmail.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>Contact</span>
                    
				</p>

				<div className="footer-icons">

					<a href="https://github.com/SivaSelvi2004/"><i className="fab fa-facebook"></i></a>
					<a href="https://github.com/SivaSelvi2004/"><i className="fab fa-twitter"></i></a>
					<a href="https://github.com/SivaSelvi2004/"><i className="fab fa-linkedin"></i></a>
					<a href="https://github.com/SivaSelvi2004/"><i className="fab fa-github"></i></a>

				</div>

			</div>

		</footer></>
  );
      }
;

export default Footer;