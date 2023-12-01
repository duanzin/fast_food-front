import { SelectedProduct } from "../utils/types";

interface ResumoProps {
  selectedProducts: SelectedProduct[];
  totalAmount: number;
}

function Resumo({ selectedProducts, totalAmount }: ResumoProps) {
  return (
    <section>
      <ul>
        {selectedProducts.map((product) => (
          <li key={product.name}>
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
      <span>Total do Pedido:</span>
      <strong>{totalAmount.toFixed(2).replace(".", ",")}</strong>
    </section>
  );
}

export default Resumo;
