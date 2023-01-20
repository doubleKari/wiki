import React from "react";
import { Link } from "react-router-dom";
import welcomeImage from "../assets/images/home.png";
import water from "../assets/images/water.png";
import air from "../assets/images/air.png";

const WelcomePage = () => {
  return (
    <section>
      <img src={welcomeImage} alt="Welcome" />
      <ul className="font-bold text-3xl mt-16  flex flex-col  space-y-6">
        <li className="flex gap-4 pl-8">
          <span className="inline-block w-10 h-10 ">
            <img src={water} alt="" className="h-full w-full" />
          </span>
          <Link to="info">
            <p className="hover:text-slate-700">Info</p>
          </Link>
        </li>
        <li className="flex gap-4 pl-8">
          <span className="inline-block w-10 h-10 ">
            <img src={air} alt="" />
          </span>
          <Link to="characters">
            <p className="hover:text-slate-700">Characaters</p>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default WelcomePage;
