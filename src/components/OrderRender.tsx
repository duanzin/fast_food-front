import { remove, update } from "../api/apiCalls";
import { ReceivedOrder } from "../utils/types";

function OrderRender({
  orders,
  setOrders,
}: {
  orders: ReceivedOrder[];
  setOrders: React.Dispatch<React.SetStateAction<ReceivedOrder[]>>;
}) {
  const handleRemoveOrder = async (id: number) => {
    const newOrders = await remove(id);
    setOrders(newOrders);
  };
  const handleUpdateOrder = async (id: number) => {
    const newOrders = await update(id);
    setOrders(newOrders);
  };

  return (
    <ul className="flex flex-col gap-9">
      {orders.map((order: ReceivedOrder) => (
        <li key={order.id} className="w-96 bg-white rounded-xl shadow-md">
          <h3>
            {order.id} - {order.customer}
          </h3>
          <div className="flex flex-row justify-between items-center">
            <ul>
              {order.products.map((product, index: number) => (
                <li key={index}>
                  <span>
                    {product.quantity}x {product.name}
                  </span>
                </li>
              ))}
            </ul>
            <div>
              <button onClick={() => handleRemoveOrder(order.id)}>
                Remover
              </button>
              {order.status === 0 && (
                <button onClick={() => handleUpdateOrder(order.id)}>
                  Pronto
                </button>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default OrderRender;
