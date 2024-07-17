import { Offcanvas } from "bootstrap";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const offcanvasRef = useRef(null);
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    if (offcanvasRef.current) {
      const bsOffcanvas =
        Offcanvas.getInstance(offcanvasRef.current) ||
        new Offcanvas(offcanvasRef.current);
      bsOffcanvas.hide();
    }
    navigate(path);
  };

  return (
    <>
      <nav className="navbar sticky-top bg-primary">
        <div className="container-fluid justify-content-end">
          {/* <Link
            className="navbar-brand text-secondary fs-2 fw-bold ms-3"
            to="/"
          >
            Shermaine's Portfolio
          </Link> */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-none d-lg-flex ms-auto">
            <div className="navbar-nav fs-2 fw-semibold flex-row align-center">
              <Link
                className={`nav-link mx-4 p-0 ${
                  location.pathname === "/"
                    ? "text-danger text-decoration-underline"
                    : ""
                }`}
                to="/"
              >
                Home
              </Link>
              <Link
                className={`nav-link mx-4 p-0 ${
                  location.pathname === "/about"
                    ? "text-danger text-decoration-underline"
                    : ""
                }`}
                to="/about"
              >
                About
              </Link>
              <Link
                className={`nav-link mx-4 mx-3 p-0 ${
                  location.pathname === "/portfolio"
                    ? "text-danger text-decoration-underline"
                    : ""
                }`}
                to="/portfolio"
              >
                Portfolio
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-end fs-3 fw-semibold w-50"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        ref={offcanvasRef}
      >
        <div className="offcanvas-header pb-0">
          <button
            className="nav-link btn px-3 fs-1"
            onClick={() => handleLinkClick("/")}
          >
            Home
          </button>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body fs-1">
          <ul className="navbar-nav justify-content-end flex-grow-1">
            <li className="nav-item px-2 py-2">
              <button
                className="nav-link btn"
                onClick={() => handleLinkClick("/about")}
              >
                About
              </button>
            </li>
            <li className="nav-item px-2 py-2">
              <button
                className="nav-link btn"
                onClick={() => handleLinkClick("/portfolio")}
              >
                Portfolio
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
