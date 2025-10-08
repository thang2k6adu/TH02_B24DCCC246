import { NavLink } from "react-router-dom";

export const Header = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "px-4 py-2 text-white bg-blue-600 rounded"
      : "px-4 py-2 text-blue-600 hover:bg-blue-100 rounded";

  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-white">
      <h1 className="text-xl font-bold">My React App</h1>
      <nav className="flex gap-2">
        <NavLink to="/" className={linkClass}>
          Bài 1
        </NavLink>
        <NavLink to="/exchange" className={linkClass}>
          Bài 2
        </NavLink>
        <NavLink to="/movies" className={linkClass}>
          Bài 3
        </NavLink>
      </nav>
    </header>
  );
};
