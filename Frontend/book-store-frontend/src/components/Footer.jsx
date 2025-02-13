import React from "react";
import footer from "../assets/footer-logo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="w-2xl h-[300px] justify-between flex bg-gray-100 shadow-2xl shadow-inner">
      <div>
        {/*Right side */}
        <img src={footer} className="w-[80px] ml-[10vw] m-5" alt="footer" />
        <ul className="flex gap-5 ml-[8vw] mt-10">
          <Link to="/">About</Link>
          <Link to="/">Features</Link>
          <Link to="/">Pricing</Link>
          <Link to="/">Gallery</Link>
          <Link to="/">Team</Link>
        </ul>
        <ul className="flex gap-5 ml-[8vw] mt-10">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Use</Link>
          <Link to="/">Sales and Refunds</Link>
          <Link to="/">Legal</Link>
        </ul>
      </div>

      <div className="mr-20">
        {/*Left side */}
        <p className="w-[25vw] mt-10">
          Subscribe to stay tuned for new product and latest updates.
        </p>
        <p>Let’s do it!</p>
        <div className="mt-2 flex w-[25vw] border-primary border-2 border-1">
          <input
            placeholder=" Enter Your Email Address"
            type="text"
            className="w-full py-2"
          />
          <button className="bg-primary w-[8vw] py-2  text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
