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
          className="flex flex-row justify-between items-center gap-5
            w-11/12 p-4 bg-white rounded-xl shadow-md max-[410px]:flex-col"
        >
          <div className="flex flex-col gap-y-4">
            <strong className="text-lg break-all">
              {order.id} - {order.customer}
            </strong>
            <ul>
              {order.products.map((product, index: number) => (
                <li key={index}>
                  <span className="text-gray-500">
                    {product.quantity}x {product.name}
                  </span>
                </li>
              ))}
            </ul>
            {order.observation && (
              <div>
                <strong>Observações:</strong>
                <p className="break-all">{order.observation}</p>
              </div>
            )}
          </div>
          <div className="flex gap-x-5">
            <button
              onClick={() => handleRemoveOrder(order.id)}
              className="bg-red-200 rounded-lg w-14 h-14 text-red-500 text-3xl"
            >
              &#x2717;
            </button>
            {order.status === false && (
              <button
                onClick={() => handleUpdateOrder(order.id)}
                className="bg-green-300 rounded-lg w-14 h-14 text-green-600 text-3xl"
              >
                &#x2713;
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default OrderRender;
