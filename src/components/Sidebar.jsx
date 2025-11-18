import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white h-screen p-6 shadow-lg">
      <h1 className="text-2xl font-bold mb-8">AI Dashboard</h1>

      <nav className="space-y-4">
        <Link
          to="/"
          className="block text-lg hover:text-blue-600 transition"
        >
          Dashboard
        </Link>

        <Link
          to="/settings"
          className="block text-lg hover:text-blue-600 transition"
        >
          Settings
        </Link>
      </nav>
    </div>
  );
}
