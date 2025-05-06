import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-4 fixed top-0 left-0">
      <h2 className="text-2xl font-bold mb-6">Chat App</h2>
      <ul>
        <li className="mb-2">
          <NavLink
            to="/chat"
            className={({ isActive }) =>
              `block p-2 rounded ${isActive ? 'bg-blue-600' : 'hover:bg-gray-700'}`
            }
          >
            Chat Rooms
          </NavLink>
        </li>
        <li className="mb-2">
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `block p-2 rounded ${isActive ? 'bg-blue-600' : 'hover:bg-gray-700'}`
            }
          >
            Admin Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;