import { NavLink } from 'react-router-dom';

const NavLinkButton = ({ key, route, children }) => {
    return (
        <NavLink key={key} to={route} className={({ isActive }) => {
            return isActive ? "border-2 border-emerald-400 text-gray-100 dark:text-gray-300 hover:text-gray-300 hover:border-e-600 border-spacing-x-16 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-neutral-700 dark:bg-neutral-900" :
                "text-gray-100 dark:text-gray-300 hover:text-gray-300 hover:border-gray-600 border-spacing-x-16 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-neutral-700 dark:bg-neutral-900"
        }}>
            {children}
        </NavLink>
    )
}

export default NavLinkButton