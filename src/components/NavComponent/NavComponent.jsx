import { NavLink } from "react-router-dom";
import styles from "./nav-component.module.css";

const NavComponent = ({ pages }) => {
  const visiblePages = pages.filter((page) => page.visibility);
  return (
    <nav className={styles.navbar + " " + styles.navbar_default}>
      <ul className={styles.navbar_nav}>
        {visiblePages.map((page) => (
          <li key={page.path}>
            <NavLink to={page.path}>{page.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavComponent;
