import { NavLink } from "react-router-dom";

const HeaderLinks = [
  <NavLink className="nav-link" to="/">
    Home
  </NavLink>,
  <NavLink className="nav-link" to="/GitHubUsers">
    GitHub User Info
  </NavLink>,
  <NavLink className="nav-link" to="/404">
    404 Page
  </NavLink>,
  <NavLink className="nav-link" to="/Users">
    Users
  </NavLink>
];

export default HeaderLinks;
