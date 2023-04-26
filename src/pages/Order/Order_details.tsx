import { useEffect, useState } from "react";
import { Modal } from "../../components/Modals/Modal";
import useReact_query from "../../hooks/useReact_query";
import { Order } from "../../Types/order_type";
import { Product } from "../../Types/product_type";
import Inputs from "./Inputs";
import { KeyValue } from "./Orders";

interface Props {
  open: boolean;
  handleClose: any;
  order: Order;
  handle_change: (e: any) => any;
  handle_update_submition: (e: any) => any;
  handle_delete_order: (e: any) => any;
}

const OrderDetails = (props: Props) => {
  const {
    open,
    handleClose,
    order: o,
    handle_change,
    handle_update_submition,
    handle_delete_order,
  } = props;

  const { useProducts } = useReact_query();
  const p = useProducts();
  const [order, setOrder] = useState({} as Order);
  useEffect(() => {
    // const items: Product[] = p.data?.data.data
    //   .filter((x: Product) =>
    //     o?.order_items.map((y: any) => y.product_id).includes(x.product_id)
    //   )
    //   .map((x: Product) => ({
    //     ...x,
    //     quantity: o?.order_items.find((y: any) => y.product_id === x.product_id)
    //       ?.quantity,
    //   }));

    const items: Product[] = o.order_items.map((x: any) => ({
      ...p.data?.data.data.find((y: Product) => y.product_id === x.product_id),
      quantity: x.quantity,
    }));

    setOrder(() => ({ ...o, order_items: items }));
  }, [o]);

  console.log(o);
  console.log(order);

  // return <div>hi</div>;

  return (
    <Modal open={open} handleClose={handleClose} clses="md:w-[600px]">
      <div className="p-5">
        <span
          className={`italic uppercase text-sm font-semibold ${
            o.order_status === "online" ? "text-green-400" : "text-gray-400"
          }`}
        >
          {o.order_type}
        </span>
        <KeyValue label="Customer" value={"Customer 1"} />

        <h4 className="shadow font-semibold text-center px-3 my-2">
          Order Items
        </h4>

        {order._id && (
          <Inputs
            data={p?.data?.data?.data}
            order={order}
            setOrder={setOrder}
          />
        )}

        {/* <table className="w-full border-gray-400">
          <thead>
            <tr className="border bg-gray-100 dark:bg-gray-700">
              <th className="border p-1">Product</th>
              <th className="border p-1">Price</th>
              <th className="border p-1">Quantity</th>
              <th className="border p-1">Total</th>
            </tr>
          </thead>
          <tbody>
            {o.order_items?.map((x: any, i: number) => (
              <tr key={i} className="border">
                <td className="border p-1">Product {i + 1}</td>
                <td className="border p-1">{x.sell_price}</td>
                <td className="border p-1">{x.quantity}</td>
                <td className="border p-1">{x.sell_price * x.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between mt-3">
          <select
            id={`order-status`}
            defaultValue="pending"
            name={`order_status`}
            className="outline-none italic uppercase text-sm font-semibold text-teal-500 bg-transparent"
            onChange={handle_change}
          >
            {statuses.map((qt) => (
              <option
                key={qt.id}
                value={qt.name}
                className="dark:text-gray-700"
              >
                {qt.label}
              </option>
            ))}
          </select>

          <div className="flex items-center gap-x-2">
            <button
              // disabled
              className="italic uppercase text-sm font-semibold text-red-500"
              onClick={handle_delete_order}
            >
              delete
            </button>
            <button
              // disabled
              className="italic uppercase text-sm font-semibold text-blue-500"
              onClick={handle_update_submition}
            >
              update
            </button>
          </div>
        </div> */}
      </div>
    </Modal>
  );
};

export default OrderDetails;

const statuses = [
  {
    id: 1,
    name: "pending",
    label: "pending",
  },
  {
    id: 2,
    name: "confirmed",
    label: "confirmed",
  },
  {
    id: 3,
    name: "delivered",
    label: "delivered",
  },
  {
    id: 4,
    name: "cancel",
    label: "cancel",
  },
];
