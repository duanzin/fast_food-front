import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="flex flex-row justify-between items-center px-10 py-2
    mb-20 gap-y-3 bg-green-800 h-fit w-screen max-[450px]:flex-col max-[450px]:py-5">
      <h1 className="text-2xl text-white font-bold">fastfood</h1>
      <nav className="w-fit h-fit">
        <Link
          to={`/`}
          className={`text-white font-bold h-fit rounded-lg p-3 ${
            isActive("/") ? "bg-green-900" : ""
          }`}
        >
          Pedidos
        </Link>
        <Link
          to={`/cozinha`}
          className={`text-white font-bold h-fit rounded-lg p-3 ${
            isActive("/cozinha") ? "bg-green-900" : ""
          }`}
        >
          Cozinha
        </Link>
        <Link
          to={`/retirada`}
          className={`text-white font-bold h-fit rounded-lg p-3 ${
            isActive("/retirada") ? "bg-green-900" : ""
          }`}
        >
          Retirada
        </Link>
      </nav>
    </header>
  );
}

export default Header;
