function Navbar() {
  return (
    <div className="bg-white shadow p-4 sticky top-0 z-10 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/src/assets/logo.png" alt="Logo" className="h-10 mr-3" />
        <h1 className="text-xl font-semibold text-gray-800">Chat App</h1>
      </div>
      <div className="flex items-center">
        <span className="text-gray-600 mr-4">Welcome, User</span>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
          Logout
        </button>
      </div>
    </div>
  );
}
export default Navbar;