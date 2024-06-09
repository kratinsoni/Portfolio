import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-headerbg w-full font-poppins py-16 px-44 md:px-4 md:py-4">
      <div className="text-white text-2xl">Contact</div>
      <div className="my-6 text-white md:hidden">
        Full Stack Software Engineer with hands-on experience in designing and
        implementing robust, scalable, and innovative web solutions. Adept at
        leveraging a comprehensive skill set encompassing front-end and back-end
        technologies.
      </div>
      <div className="text-white">✉ kratin67@gmail.com</div>
      <div className="my-4 flex gap-6">
        <Link to="https://www.linkedin.com/in/harshit-soni-70336229a/">
          <img
            src="https://drive.google.com/thumbnail?id=12RnzBNKfzQHEbzxbvuvg1L_T_17Z5FQm"
            width="30px"
            alt=""
          />
        </Link>
        <Link to="https://github.com/kratinsoni">
          <img
            src="https://drive.google.com/thumbnail?id=1cfqRL-WbQQOe_y_7UN1a9MjMLcy9ocg7"
            width="30px"
            alt=""
          />
        </Link>
        <Link to="https://www.instagram.com/harshit_soni_1010/">
          <img
            src="https://drive.google.com/thumbnail?id=13bSfjPMTulJQaBEgWMYRtro3ybsWJ16E"
            width="30px"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
