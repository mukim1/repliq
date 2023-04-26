import React, { useEffect, useReducer } from "react";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Autocomplete } from "../../components/Inputs/Autocomplete/Products";
import { order_actions } from "../../Contexts/reducers/order_reducer";
import { Product } from "../../Types/product_type";
import { MdOutlineAdd } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiAddToQueue } from "react-icons/bi";

type Props = {
  data: Product[];
  order: any;
  order_model?: any;
  isCreating?: boolean;
  setOrders?: any;
  setOrder?: any;
};

const Inputs = (props: Props) => {
  const { data, order, setOrder, setOrders, order_model, isCreating } = props;
  const [form_data, dispatch] = useReducer(order_actions, order as any);

  console.log(order);

  useEffect(() => {
    if (isCreating) {
      setOrders((p: any) =>
        p.map((x: any) => (x.id === order.id ? form_data : x))
      );
    } else {
      setOrder((p: any) => ({ ...p, ...form_data }));
    }
  }, [form_data]);

  return (
    <div className="p-3 bg-white rounded dark:bg-gray-700 shadow-md ">
      <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-200 text-center">
        Order #{order.id}
      </h1>
      <table className="w-full mb-3 rounded border">
        <thead>
          <tr>
            {tables.map((x) => (
              <th key={x.name} className="border p-1">
                {x.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {order.order_items?.map((x: any, i: number) => (
            <tr key={i}>
              <td className="border p-1">{x.name}</td>
              <td className="border p-1">{x.sell_price}</td>
              <td className="border p-1">{x.quantity}</td>
              <td className="border p-1">{x.sell_price * x.quantity}</td>
              <td className="border p-1">
                {actions.map((a) => (
                  <button
                    key={a.type}
                    type="button"
                    className={`border p-1 ml-1 ${a.class}`}
                    onClick={() => dispatch({ type: a.type, payload: x })}
                  >
                    {a.icon}
                  </button>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Autocomplete data={data} dispatch={dispatch} />
      {isCreating && (
        <div className="text-gray-700 dark:text-gray-100 flex gap-x-1">
          <button
            type="button"
            className={iconCls}
            onClick={() =>
              setOrders((p: any) => p.filter((x: any) => x.id !== order.id))
            }
          >
            <RiDeleteBin6Line size={20} />
          </button>
          <button
            type="button"
            className={iconCls}
            onClick={() =>
              setOrders((p: any) => [
                ...p,
                Object.assign({}, { ...order, id: Math.random() }),
              ])
            }
          >
            <BiAddToQueue size={20} />
          </button>
          <button
            type="button"
            className={iconCls}
            onClick={() =>
              setOrders((p: any) => [
                ...p,
                { ...order_model, id: Math.random() },
              ])
            }
          >
            <MdOutlineAdd size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default React.memo(Inputs);

const actions = [
  {
    type: "INCREMENT",
    icon: <AiOutlinePlus />,
    class: "text-green-500",
  },
  {
    type: "DECREMENT",
    icon: <AiOutlineMinus />,
    class: "text-pink-500",
  },
  {
    type: "REMOVE",
    icon: <AiOutlineDelete />,
    class: "text-red-500",
  },
];

const tables = [
  {
    name: "name",
    label: "Name",
  },
  {
    name: "sell_price",
    label: "Price",
  },
  {
    name: "quantity",
    label: "Quan.",
  },
  {
    name: "total",
    label: "Total",
  },
  {
    name: "action",
    label: "Action",
  },
];

const iconCls =
  "p-2 rounded-full transition bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500";

// const Table = ({ data, tables, action }: TableProps) => {
//   return (
//     <table className="w-full mb-3 rounded border">
//       <thead>
//         <tr>
//           {tables.map((x: any) => (
//             <th key={x.name} className="border p-1">
//               {x.label}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((x: any, i: number) => (
//           <tr key={i}>
//             {tables.map((t: any) => (
//               <td key={t.name} className="border p-1">
//                 {t.name === "action" ? action : x[t.name]}
//               </td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };
