import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-row justify-between items-center bg-green-900 w-screen">
      <h1 className="text-2xl text-white">fastfood</h1>
      <nav>
        <Link to={`/`} className="text-white">
          Pedidos
        </Link>
        <Link to={`/cozinha`} className="text-white">
          Cozinha
        </Link>
        <Link to={`/retirada`} className="text-white">
          Retirada
        </Link>
      </nav>
    </header>
  );
}

export default Header;
