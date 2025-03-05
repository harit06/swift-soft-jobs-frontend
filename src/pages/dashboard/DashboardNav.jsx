import { UserAuth } from "../../context/AuthContext"
import ToggleButton from "../../components/ToggleButtonDarkMode"
import { useState, useEffect } from "react"

export default function DashboardNav() {
  const { currentUser, doSignOut } = UserAuth()

  const [userDropdownOpen, setuserDropdownOpen] = useState(false)

  const toggleUserDropdown = () => setuserDropdownOpen(!userDropdownOpen)

  return (
    <>
      <div>Dashboard</div>
      <div className="flex md:order-2 space-x-5 md:space-x-10 rtl:space-x-reverse ">
        <ToggleButton className="flex px-4 py-2"></ToggleButton>
        <div className="relative">
          <button
            id="dropdownHoverButton"
            onClick={toggleUserDropdown}
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            {currentUser.displayName}{" "}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {userDropdownOpen && (
            <div className="absolute right-0 mt-2 py-2 w-24 bg-white rounded shadow-xl dark:bg-[#222222] dark:text-white">
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownHoverButton"
              >
                <li>
                  <a
                    onClick={doSignOut}
                    className="focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center cursor-pointer"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
