import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";


const Header = () => {
  const [isOpen, setIsOpen ] = useState(false)
    return (
        <div>
             <header className="flex justify-between px-4 py-4 shadow-md md:px-8">
      <ul className="flex gap-4">
        <li>
          <NavLink
            className={({ isActive }) => isActive ? 'text-blue-700 underline' : ''}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive ? 'text-blue-700 underline' : ''}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive ? 'text-blue-700 underline' : ''}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <button onClick={()=> setIsOpen(true)}>Sign In</button>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} 
          header={<div className="text-xl font-bold">Sign In</div>}
          footer={    <div className="flex justify-end gap-4">
            <button onClick={()=>setIsOpen(false)} className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400/80 active:bg-gray-400/60">
              Cancel
            </button>
            <button className="rounded-md bg-blue-300 px-6 py-2 font-semibold hover:bg-blue-400/80 active:bg-blue-400/60">
              Sign In
            </button>
          </div>}>
          <input
            placeholder="Username"
            className="grow rounded border border-gray-600 px-2 py-1"
            type="text"
          />
          <input
            placeholder="Password"
            className="grow rounded border border-gray-600 px-2 py-1"
            type="password"
          /> 
          </Modal>
        </li>
      </ul>
    </header>
        </div>
    );
};

export default Header;