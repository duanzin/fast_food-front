import { useState } from "react";
import Header from "../components/Header";
import Categorias from "../components/Categorias";
import Produtos from "../components/Produtos";
import SearchBar from "../components/SearchBar";

function Pedidos() {
  const [foundItemId, setFoundItemId] = useState<string | null>(null);
  return (
    <>
      <Header />
      <main className="w-5/6 m-auto mb-20">
        <SearchBar setFoundItemId={setFoundItemId}/>
        <section className="mb-20">
          <h2 className="text-2xl font-bold">Categorias</h2>
          <span className="text-lg">Navegue por categoria</span>
          <Categorias />
        </section>
        <section className="mb-20">
          <h2 className="text-2xl font-bold">Produtos</h2>
          <span className="text-lg">
            Selecione um produto para adicionar ao seu pedido
          </span>
          <Produtos foundItemId={foundItemId}/>
        </section>
        <footer className="flex flex-row justify-end gap-16">
          <button className="text-2xl text-green-800 font-bold w-80 h-16 border-4 border-green-800 rounded-3xl">
            Cancelar
          </button>
          <button className="text-2xl text-white font-bold w-80 h-16 rounded-3xl bg-green-800">
            Finalizar pedido
          </button>
        </footer>
      </main>
    </>
  );
}

export default Pedidos;
