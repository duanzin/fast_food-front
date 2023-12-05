import { ReceivedOrder } from "../utils/types";

function NameRender({ orders }: { orders: ReceivedOrder[] }) {
  return (
    <ul className="flex flex-col gap-9">
      {orders.map((order: ReceivedOrder) => (
        <li
          key={order.id}
          className={`text-9xl font-bold max-[450px]:text-8xl ${
            order.status === true ? "text-green-800" : "text-gray-500"
          }`}
        >
          {order.customer}
        </li>
      ))}
    </ul>
  );
}

export default NameRender;
