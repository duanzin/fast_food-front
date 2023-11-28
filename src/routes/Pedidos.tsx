import Header from "../components/Header";

function Pedidos() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h2 className="text-2xl font-bold">Categorias</h2>
          <span className="text-lg">Navegue por categoria</span>
          <ul className="flex flex-row">
            <li className="text-xl">Combos</li>
            <li className="text-xl">acompanhamentos</li>
            <li className="text-xl">Bebidas</li>
            <li className="text-xl">Sobremesas</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Produtos</h2>
          <span className="text-lg">
            Selecione um produto para adicionar ao seu pedido
          </span>
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
