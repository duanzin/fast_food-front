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
        <li
          key={order.id}
          className="flex flex-row justify-between items-center 
            w-96 p-4 bg-white rounded-xl shadow-md"
        >
          <ul>
            <strong className="text-lg">
              {order.id} - {order.customer}
            </strong>
            {order.products.map((product, index: number) => (
              <li key={index}>
                <span className="text-gray-500">
                  {product.quantity}x {product.name}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex gap-x-5">
            <button onClick={() => handleRemoveOrder(order.id)}>Remover</button>
            {order.status === 0 && (
              <button onClick={() => handleUpdateOrder(order.id)}>
                Pronto
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default OrderRender;
