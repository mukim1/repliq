import { useState } from "react";
import useToast from "../../hooks/useToast";
import { Order as Order_creation } from "./Create";
import { Order } from "../../Types/order_type";
import OrderDetails from "./Order_details";
import useReact_query from "../../hooks/useReact_query";

const Orders = () => {
  const tst = useToast();
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState({} as Order);
  const [form_data, setForm_data] = useState({} as Order_creation);
  const { useOrders } = useReact_query();
  const o = useOrders();

  const handleOpen = (order_p: any) => {
    setOpen(true);
    setOrder(order_p);
    setForm_data((p: any) => ({
      ...p,
      order_status: order.order_status,
      brand_id: order.brand_id,
      order_id: order.order_id,
      order_items: order.order_items,
    }));
  };

  const handleClose = () => {
    setOpen(false);
    setOrder({} as Order);
    setForm_data({} as Order_creation);
  };

  const handle_change = (e: any) => {
    const { name, value } = e.target;
    setForm_data((p: any) => ({ ...p, [name]: value }));
  };

  const handle_update_submition = (e: any) => {
    e.preventDefault();
    console.log(form_data);
  };

  const handle_delete_order = (id: string) => {
    console.log("delete order");
    console.log(order._id);
    // if order status is cancel or rejected only then it will be deleteable
  };

  if (o.isLoading) return <div>Loading...</div>;
  if (o.error) return <div>Error...</div>;
  if (!o.data) return <div>Data Not Found...</div>;

  return (
    <div>
      <h1>Product List</h1>
      <table className="w-full border-gray-400">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            {tds.map((td) => (
              <th
                key={td.name}
                className="border border-gray-400 p-2 uppercase"
              >
                {td.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {o.data?.data?.map((item: Order) => {
            return (
              <tr
                key={item._id}
                className="cursor-pointer"
                onClick={() => handleOpen(item)}
              >
                <td className="border border-gray-400 p-1 pl-3">
                  {new Date(`${item.timeline?.[0].date}`).toLocaleString()}
                </td>
                <td className="border border-gray-400 p-1 pl-3">
                  {item.order_id}
                </td>
                <td className="border border-gray-400 p-1 pl-3">
                  {item.order_status}
                </td>
                <td className="border border-gray-400 p-1 pl-3">
                  {item.order_type}
                </td>
                <td className="border border-gray-400 p-1 pl-3">
                  {item.total}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <OrderDetails
        open={open}
        handleClose={handleClose}
        order={order}
        handle_change={handle_change}
        handle_update_submition={handle_update_submition}
        handle_delete_order={handle_delete_order}
        // data={data}
      />
    </div>
  );
};

export default Orders;

const tds = [
  {
    name: "created_at",
    label: "Date",
  },
  {
    name: "order_id",
    label: "order_id",
  },
  {
    name: "order_status",
    label: "order_status",
  },
  {
    name: "order_type",
    label: "order_type",
  },
  {
    name: "total",
    label: "total",
  },
];

export const KeyValue = ({ label, value }: any) => (
  <div className="flex items-center gap-x-2">
    <span className="text-lg font-bold">{label}: </span>
    <span className="text-lg">{value}</span>
  </div>
);
