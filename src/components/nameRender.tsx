import { ReceivedOrder } from "../utils/types";

function NameRender({ orders }: { orders: ReceivedOrder[] }) {
  return (
    <ul className="flex flex-col gap-9">
      {orders.map((order: ReceivedOrder) => (
        <li
          key={order.id}
          className={`text-9xl font-bold ${
            order.status === 1 ? "text-green-800" : "text-gray-500"
          }`}
        >
          {order.customer}
        </li>
      ))}
    </ul>
  );
}

export default NameRender;
