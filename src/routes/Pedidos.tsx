import Header from "../components/Header";
import acomImg from "../images/categorias/acompanhamento.png";
import bebidaImg from "../images/categorias/bebidas.png";
import comboImg from "../images/categorias/combos.png";
import sobreImg from "../images/categorias/sobremesa.png";

function Pedidos() {
  return (
    <>
      <Header />
      <main className="w-5/6 m-auto">
        <section>
          <h2 className="text-2xl font-bold">Categorias</h2>
          <span className="text-lg">Navegue por categoria</span>
          <ul className="flex flex-row justify-between mt-4">
            <li className="flex flex-col items-center w-56 h-fit py-5 bg-white rounded-lg shadow-lg">
              <img src={comboImg} className="w-36 h-36" />
              <strong className="text-xl">Combos</strong>
            </li>
            <li className="flex flex-col items-center w-56 h-fit py-5 bg-white rounded-lg shadow-lg">
              <img src={acomImg} className="w-36 h-36" />
              <strong className="text-xl">Acompanhamentos</strong>
            </li>
            <li className="flex flex-col items-center w-56 h-fit py-5 bg-white rounded-lg shadow-lg">
              <img src={bebidaImg} className="w-36 h-36" />
              <strong className="text-xl">Bebidas</strong>
            </li>
            <li className="flex flex-col items-center w-56 h-fit py-5 bg-white rounded-lg shadow-lg">
              <img src={sobreImg} className="w-36 h-36" />
              <strong className="text-xl">Sobremesas</strong>
            </li>
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
