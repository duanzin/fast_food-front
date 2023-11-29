import Header from "../components/Header";
import Categorias from "../components/Categorias";
import Produtos from "../components/Produtos";

function Pedidos() {
  return (
    <>
      <Header />
      <main className="w-5/6 m-auto">
        <section>
          <h2 className="text-2xl font-bold">Categorias</h2>
          <span className="text-lg">Navegue por categoria</span>
          <Categorias />
        </section>
        <section>
          <h2 className="text-2xl font-bold">Produtos</h2>
          <span className="text-lg">
            Selecione um produto para adicionar ao seu pedido
          </span>
          <Produtos />
        </section>
        <footer className="flex flex-row">
          <button className="text-2xl">Cancelar</button>
          <button className="text-2xl">Finalizar pedido</button>
        </footer>
      </main>
    </>
  );
}

export default Pedidos;
