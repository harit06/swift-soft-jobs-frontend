import ToggleButton from "../../components/ToggleButtonDarkMode"
import { useNavigate } from "react-router-dom"
export default function HomeNav() {
  const navigate = useNavigate()
  return (
    <>
      <a
        href="/"
        className="flex items-center space-x-3 rtl:space-x-reverse rounded-full"
      >
        <svg
          className="bg-slate-900 rounded-sm"
          width="32"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="16"
            y="1"
            width="15"
            height="15"
            fill="#00897B"
            rx="3"
            ry="3"
          />
        </svg>
        <span className="self-center text-l font-semibold whitespace-nowrap dark:text-white">
          Swift Soft Jobs
        </span>
      </a>
      <div className="flex md:order-2 space-x-5 md:space-x-10 rtl:space-x-reverse ">
        <ToggleButton className="flex px-4 py-2"></ToggleButton>
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center cursor-pointer"
        >
          Login
        </button>
      </div>
    </>
  )
}
