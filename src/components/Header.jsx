import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-950 shadow  text-white p-4 flex gap-6">
      <NavLink to="/">Admin</NavLink>
      {/* <NavLink to="/admin">Admin</NavLink> */}
     
    </header>
  );
}

export default Header;




