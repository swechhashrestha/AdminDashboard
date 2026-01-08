import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-950 shadow p-4 flex gap-6">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/admin/product"></NavLink>
      <NavLink to="/admin/files"></NavLink>
      <NavLink to="/admin/messages"></NavLink>
    </header>
  );
}

export default Header;




