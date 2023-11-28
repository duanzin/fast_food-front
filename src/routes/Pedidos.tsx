import Header from "../components/Header";

function Pedidos() {
  return (
    <>
      <Header />
      <main>
        <section>
          <h2>Categorias</h2>
          <span>Navegue por categoria</span>
          <ul className="flex flex-row">
            <li>Combos</li>
            <li>acompanhamentos</li>
            <li>Bebidas</li>
            <li>Sobremesas</li>
          </ul>
        </section>
        <section>
          <h2>Produtos</h2>
          <span>Selecione um produto para adicionar ao seu pedido</span>
        </section>
        <footer className="flex flex-row">
          <button>Cancelar</button>
          <button>Finalizar pedido</button>
        </footer>
      </main>
    </>
  );
}

export default Pedidos;
