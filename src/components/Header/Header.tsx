import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Main</Link>
        <Link to="done">Done</Link>
      </nav>
    </header>
  );
};

export default Header;
