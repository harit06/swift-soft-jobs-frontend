function Navbar({ children }) {
  return (
    <nav className="bg-nav fixed top-0 w-full z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 top-0 left-0">
        {children}
      </div>
    </nav>
  )
}

export default Navbar
