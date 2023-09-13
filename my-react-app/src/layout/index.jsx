import { NavLink, Outlet } from 'react-router-dom';

export const AppLayout = () => {
  const handleLinkClassName = ({ isActive }) =>
    isActive ? 'text-green-500' : '';

  return (
    <>
      <nav>
        <NavLink to="/" className={handleLinkClassName}>
          Home
        </NavLink>
        |
        <NavLink to="/about" className={handleLinkClassName} end>
          About
        </NavLink>
        |
        <NavLink to="/about/team" className={handleLinkClassName}>
          Team
        </NavLink>
        |
        <NavLink to="/users" className={handleLinkClassName}>
          Users
        </NavLink>
        |
        <NavLink to="/login" className={handleLinkClassName}>
          Login
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
