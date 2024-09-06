import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar(props) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.top}>
        <i className={`bi bi-list ${styles.bi}`} onClick={toggleMenu}><GiHamburgerMenu /></i>
        <span className="span1">{props.title}</span>
      </div>
      <div className={`${styles.list_item} ${isMenuOpen ? styles.main2 : ''}`} id="l">
        <ul>
          <li className={styles.nav_item}>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={10}
              onClick={toggleMenu}
              activeClass={styles.active}
            >
              {props.home}
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={10}
              onClick={toggleMenu}
              activeClass={styles.active}
            >
              about
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={10}
              onClick={toggleMenu}
              activeClass={styles.active}
            >
              skills
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={10}
              onClick={toggleMenu}
              activeClass={styles.active}
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
