import { Link, NavLink, Outlet } from "react-router-dom"

export const AppLayout = () => {
    const handleLinkClassName = ({isActive})=> isActive?"active":""

    return <>
        <nav>
            <NavLink to="/" className={handleLinkClassName}>Home</NavLink> | <NavLink to="/about" className={handleLinkClassName} exact>About</NavLink> | <NavLink to="/about/team" className={handleLinkClassName}>Team</NavLink> | <NavLink to="/users" className={handleLinkClassName}>Users</NavLink>
        </nav>
        <Outlet />
    </>
}