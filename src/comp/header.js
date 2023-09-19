import React from 'react';
import './header.css';
import { Link,NavLink } from "react-router-dom";

const Header = () => {
  return (
<div>
<header className="hide-when-mobile">
  <h1>
  <Link to="/">
        Meral stores 
        </Link>
        </h1>
        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/html">
              HTML
            </NavLink>
            {/* <ul className="sub-ul">
              <li>
                <a href="l">Full Course</a>
              </li>
              <li>
                <a href="l">Crash Course</a>
              </li>
              <li>
                <a href="l">learn in 1h</a>
              </li>
            </ul> */}
          </li>

          <li className="main-list">
            <NavLink className="main-link" to="/css">
              CSS
            </NavLink>
            {/* <ul className="sub-ul">
              <li>
                <a href="l">Full Course</a>
              </li>
              <li>
                <a href="l">CSS Examples</a>
              </li>
              <li className="mini-projects">
                <a href="l">mini projects&nbsp; + </a>
                <ul className="sub-sub-ul">
                  <li>
                    <a href="l">project 1</a>
                  </li>
                  <li>
                    <a href="l">project 2</a>
                  </li>
                  <li>
                    <a href="l">project 3</a>
                  </li>
                </ul>
              </li>
            </ul> */}
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/javascript">
              JavaScript
            </NavLink>
            {/* <ul className="sub-ul sub-of-js">
              <li>
                <a href="l">coming soon🔥</a>
              </li>
            </ul> */}
          </li>
        </ul>
      </header>
      <header className="show-when-mobile">
        
        <h1>
        <Link to="/">
          Meral stores
          </Link>
          </h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
          <Link to="/html">
            <label htmlFor="html">
              HTML
            </label>
            </Link>
            {/* <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="l">Full Course</a>
              </li>
              <li>
                <a href="l">Crash Course</a>
              </li>
              <li>
                <a href="l">learn in 1h</a>
              </li>
            </ul> */}
          </div>
          <div className="main-div">
          <Link to="/css">
            <label htmlFor="css">
              CSS 
            </label>
            </Link>
            {/* <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="l">Full Course</a>
              </li>
              <li>
                <a href="www">CSS Examples</a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href="www">project 1</a>
                  </li>
                  <li>
                    <a href="www">project 2</a>
                  </li>
                  <li>
                    <a href="www">project 3</a>
                  </li>
                </ul>
              </li>
            </ul> */}
          </div>
          <div className="main-div">
          <Link to="/javascript">
            <label htmlFor="js">
              JavaScript
            </label>
            </Link>
            {/* <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="www">coming soon🔥</a>
              </li>
            </ul> */}
          </div>
        </div>
      </header>
    
    
</div>

  );
}

export default Header;
