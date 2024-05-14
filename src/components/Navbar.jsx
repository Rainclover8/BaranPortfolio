import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useViewportScroll } from "framer-motion";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useViewportScroll();
  scrollY.onChange((y) => {
    if (y > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <nav
      className={`bg-dark2 fixed w-full z-50 ${
        isScrolled ? "opacity-70" : ""
      } `}

    >
      <div className="md:flex gap-20  justify-around items-center">
        <Link to="/" className="font-Jersey text-6xl">
          Home
        </Link>
        <Link to="/"  className="font-Jersey text-6xl">
          Who I Am
        </Link>
        <Link to="/" className="font-Jersey text-6xl">
          What I Do
        </Link>
        <Link to="/" className="font-Jersey text-6xl">
          Contact Me
        </Link>
      </div>
     
    </nav>
  );
}

export default Navbar;
