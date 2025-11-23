import { useState } from 'react';
import { NavLink } from 'react-router';
import { FaLaptopCode, FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-gray-800 border-b border-gray-700 shadow-md sticky top-0 z-50'>
      <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
        <NavLink
          to='/'
          className='flex items-center gap-2 text-lg font-bold text-blue-300'
        >
          <FaLaptopCode className='text-blue-400 text-xl' />
          <span>Friendly Developer</span>
        </NavLink>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-6'>
          <div className='space-x-4 text-sm text-gray-300'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? 'text-white font-bold'
                  : 'text-gray-300 hover:text-white transition-colors'
              }
            >
              Home
            </NavLink>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive
                  ? 'text-white font-bold'
                  : 'text-gray-300 hover:text-white transition'
              }
            >
              About
            </NavLink>
            <NavLink
              to='/projects'
              className={({ isActive }) =>
                isActive
                  ? 'text-white font-bold'
                  : 'text-gray-300 hover:text-white transition-colors'
              }
            >
              Projects
            </NavLink>
            <NavLink
              to='/blog'
              className={({ isActive }) =>
                isActive
                  ? 'text-white font-bold'
                  : 'text-gray-300 hover:text-white transition-colors'
              }
            >
              Blog
            </NavLink>
            <NavLink
              to='/contact'
              className={({ isActive }) =>
                isActive
                  ? 'text-white font-bold'
                  : 'text-gray-300 hover:text-white transition-colors'
              }
            >
              Contact
            </NavLink>
          </div>
        </div>

        <div className='md:hidden flex items-center gap-4'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-gray-300 hover:text-white transition-colors md:hidden cursor-pointer'
            title='Menu'
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className='md:hidden bg-gray-800 border-t border-gray-700 px-6 py-4 space-y-2 space-x-4 text-center'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? 'text-white font-bold'
                : 'text-gray-300 hover:text-white transition-colors'
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive
                ? 'text-white font-bold'
                : 'text-gray-300 hover:text-white transition-colors'
            }
          >
            About
          </NavLink>
          <NavLink
            to='/projects'
            className={({ isActive }) =>
              isActive
                ? 'text-white font-bold'
                : 'text-gray-300 hover:text-white transition-colors'
            }
          >
            Projects
          </NavLink>
          <NavLink
            to='/blog'
            className={({ isActive }) =>
              isActive
                ? 'text-white font-bold'
                : 'text-gray-300 hover:text-white transition-colors'
            }
          >
            Blog
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              isActive
                ? 'text-white font-bold'
                : 'text-gray-300 hover:text-white transition-colors'
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
