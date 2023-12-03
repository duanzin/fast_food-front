import { SelectedProduct } from "../utils/types";

interface ResumoProps {
  selectedProducts: SelectedProduct[];
  totalAmount: number;
}

function Resumo({ selectedProducts, totalAmount }: ResumoProps) {
  return (
    <section className="flex flex-col w-full p-9 gap-y-5 mb-20 border border-solid border-gray-400 rounded-md max-[370px]:p-4">
      <ul className="pb-5 border-b-2 border-dashed border-gray-300">
        {selectedProducts.map((product) => (
          <li key={product.name} className="flex items-center justify-between text-2xl">
            <span>
              {product.quantity}x {product.name}
            </span>
            <span>
              R$
              {(product.price * product.quantity).toFixed(2).replace(".", ",")}
            </span>
          </li>
        ))}
      </ul>
      <span className="text-2xl">Total do Pedido:</span>
      <strong className="text-4xl">
        R$ {totalAmount.toFixed(2).replace(".", ",")}
      </strong>
    </section>
  );
}

export default Resumo;
