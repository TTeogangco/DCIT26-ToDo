import { NavLink } from 'react-router-dom'

function Navbar() {
  const links = [
    { name: 'Home', path: '/home' },
    { name: 'Task Groups', path: '/groups' },
    { name: 'User Guide', path: '/guide' },
    { name: 'User Information', path: '/users' },
    { name: 'Developers', path: '/developers' },
  ]

  return (
    <nav className="w-full bg-slate-900 text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-5">


        <div className="flex flex-wrap gap-2">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
