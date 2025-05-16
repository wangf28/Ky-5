import React from "react";

export default function Home() {
  return (
    <>
      <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">
              First
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading2">
              Second
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#scrollspyHeading3">
                  Third
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading4">
                  Fourth
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading5">
                  Fifth
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example bg-body-tertiary p-3 rounded-2"
        tabIndex={0}
      ></div>
    </>
  );
}
