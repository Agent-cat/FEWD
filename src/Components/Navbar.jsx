import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Home, Briefcase, Building2, User, LogIn, Menu, X, LogOut } from 'lucide-react'
import { Navroutes } from '../constants/constants'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
    setDropdownOpen(false)
    navigate('/')
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-white fixed w-full border-gray-600 border-b z-50">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-gray-800 text-2xl font-bold flex items-center">
              <span>Exam</span>
            </NavLink>
          </div>


          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {Navroutes.map((route) => (
                <NavLink
                  key={route.name}
                  to={route.to}
                  className={({ isActive }) =>
                    `${isActive ? 'text-gray-900' : 'text-gray-600'} hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center`
                  }
                >
                  {route.name}
                </NavLink>
              ))}
            </div>
          </div>


          <div className="hidden md:flex gap-2">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                >
                  <span>{user.name}</span>
                  <User className="w-4 h-4" />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      <LogOut className="w-4 h-4 inline mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <NavLink
                  to="/signin"
                  className={({ isActive }) =>
                    `${isActive ? 'bg-gray-100' : ''} text-black px-4 py-2 border-black border rounded-md text-sm font-medium flex items-center`
                  }
                >
                  <LogIn className="w-4 h-4 mr-1" />
                  Signin
                </NavLink>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `${isActive ? 'bg-gray-900' : 'bg-black'} text-white px-4 py-3 rounded-md text-sm font-medium flex items-center`
                  }
                >
                  <LogIn className="w-4 h-4 mr-1" />
                  Register
                </NavLink>
              </>
            )}
          </div>


          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>


      <div className={`md:hidden fixed inset-y-0 right-0 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-full bg-white shadow-lg transition-transform duration-300 ease-in-out z-50`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <NavLink to="/" className="text-gray-800 text-2xl font-bold" onClick={() => setIsOpen(false)}>
              Exam
            </NavLink>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          <div className="space-y-6">
            {Navroutes.map((route) => (
              <NavLink
                key={route.name}
                to={route.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? 'text-gray-900 bg-gray-100' : 'text-gray-600'} hover:text-gray-900 hover:bg-gray-50 block text-lg font-medium p-3 rounded-lg transition-colors`
                }
              >
                {route.name}
              </NavLink>
            ))}
            <div className="pt-6 space-y-3">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                  >
                    <span>{user.name}</span>
                    <User className="w-4 h-4" />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        <LogOut className="w-4 h-4 inline mr-2" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <NavLink
                    to="/signin"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `${isActive ? 'bg-gray-100' : ''} text-black px-4 py-3 border-black border rounded-lg text-base font-medium flex items-center justify-center hover:bg-gray-50 transition-colors`
                    }
                  >
                    <LogIn className="w-5 h-5 mr-2" />
                    Signin
                  </NavLink>
                  <NavLink
                    to="/register"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `${isActive ? 'bg-gray-900' : 'bg-black'} text-white px-4 py-3 rounded-lg text-base font-medium flex items-center justify-center hover:bg-gray-800 transition-colors`
                    }
                  >
                    <LogIn className="w-5 h-5 mr-2" />
                    Register
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </div>


      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  )
}

export default Navbar