import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleButtonToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <NavLink to="/">
              <h2>WorldAtlas</h2>
            </NavLink>
          </div>

          <nav className={`${isMenuOpen ? "menu-mobile" : "menu-web"}`}>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  onClick={handleMenuClose} // Close menu when link is clicked
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  onClick={handleMenuClose} // Close menu when link is clicked
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/country"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  onClick={handleMenuClose} // Close menu when link is clicked
                >
                  Country
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  onClick={handleMenuClose} // Close menu when link is clicked
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
