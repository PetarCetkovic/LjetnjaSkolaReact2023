import { Link, Outlet } from "react-router-dom"

export const AppLayout = () => {
    return <>
        <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/about/team">Team</Link>
        </nav>
        <Outlet />
    </>
}