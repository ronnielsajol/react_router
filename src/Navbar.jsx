import "./styles.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import PropTypes from "prop-types";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Site name
      </Link>

      <ul>
        <CustomLink to="/pricing">Pricing</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
