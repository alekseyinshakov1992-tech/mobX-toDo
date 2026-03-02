import { Link } from "react-router-dom";
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header>
      <nav className={styles.wrapper}>
        <Link className={styles.item} to="/">Main</Link>
        <Link className={styles.item} to="done">Completed</Link>
      </nav>
    </header>
  );
};

export default Header;
