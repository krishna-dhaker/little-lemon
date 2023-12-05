import React from "react";
import logo from '../images/Logo .svg';

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="" />
          <p>
            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservation">Reservation</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              Address: <br /> 123 Hometown, USA
            </li>
            <li>Phone: <br /> ++ 7890 0987 6543</li>
            <li>Email: <br /> littlelemon@lemon.com</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
