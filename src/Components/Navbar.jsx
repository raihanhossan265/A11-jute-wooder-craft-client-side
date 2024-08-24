import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleSingOut = e =>{
        console.log('blt clicked');
        e.preventDefault()
        logOut()
        .then(result =>{console.log(result.user)})
        .catch(error => console.log(error.message))
    }
    const links = <div className="text-sm space-x-4 font-semibold">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/allartcraft'}>All Art craft</NavLink>
        <NavLink to={'/addcraftitem'}>Add Craft Item</NavLink>
        <NavLink to={'/myartcraftlist'}>My Art Craft List</NavLink>
    </div>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Art & Craft</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div>
                    {user ? 
                    <div className="flex items-center ">
                        <button onClick={handleSingOut}>Sign OUT</button>
                        <div className="w-10">
                        <img className="rounded-full" src="" alt="" />
                        </div>
                    </div>
                    :
                    <NavLink to={'/register'}>Register</NavLink> 
                    }
                </div>

            </div>
        </div>
    );
};

export default Navbar;