import { NavLink } from "react-router-dom";

const SideBarNav = () => {
  return (
    <div className="fixed top-0 left-0 h-screen flex flex-col bg-slate-700 shadow-lg">
      <NavLink>Something</NavLink>
      <NavLink>Something else</NavLink>
      <NavLink>Something else AGAIN</NavLink>
    </div>
  );
};

export default SideBarNav;
