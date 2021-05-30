import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaTimes, FaBars } from "react-icons/fa";
import styles from "../../styles/Navbar.module.css";
import { IconContext } from "react-icons/lib";

function Navbar({ categories }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", showButton);
    showButton();
  }, []);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <Link href="/">
            <a className={styles.navbarLogo} onClick={closeMobileMenu}>
              SPHIMX
            </a>
          </Link>
          <div className={styles.menuIcon} onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul
            className={
              click ? `${styles.navMenu} ${styles.active}` : `${styles.navMenu}`
            }
          >
            {categories.map((category) => {
              return (
                <li className={styles.navbarItem} key={category.id}>
                  <Link href={`/category/${category.slug}`}>
                    <a className={styles.navbarLink} onClick={closeMobileMenu}>
                      {category.name}
                    </a>
                  </Link>
                </li>
              );
            })}
            <li className={styles.navbarItem}>
              <Link href="/boutique">
                <a className={styles.navbarLink}>Boutique</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </IconContext.Provider>
  );
}

export default Navbar;
