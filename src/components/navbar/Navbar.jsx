import { RiHome4Line, RiTimeLine } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { Link } from "react-router";
import LogoImg from "../../assets/logo.png"
const Navbar = () => {
  const links = <>
    <li className="text-gray-500 font-semibold"><Link to={"/"}> <RiHome4Line />
      Home</Link></li>
    <li className="text-gray-500 font-semibold"><Link to={"timeline"}><RiTimeLine />
      Timeline</Link></li>
    <li className="text-gray-500 font-semibold"><Link to={"stats"}>
      <GoGraph />
      Stats</Link></li>
  </>

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-gray-50">
              {links}
            </ul>
          </div>
          <Link to={"/"} className="text-2xl text-[#244D3F]">
            <img src={LogoImg} alt="KeenKeeeper logo image" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;