import { useState } from "react";
import Inputs from "./Inputs";
import { useAuth } from "../../Contexts/Auth_context";
import useToast from "../../hooks/useToast";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useReact_query from "../../hooks/useReact_query";

const AddNew = () => {
  const auth = useAuth();
  const tost = useToast();
  const axios_private = useAxiosPrivate();
  const order_model = {
    id: Math.random(),
    brand_id: auth.user?.id,
    order_type: "offline",
    user_id: "user_id",
    order_items: [],
  };
  const [orders, setOrders] = useState([order_model] as any[]);
  const { useOrders } = useReact_query();
  const o = useOrders();
  // const { data, isLoading, error } = useOrders();

  const handleSubmmit = async (e: any) => {
    e.preventDefault();
    console.log(orders);
    try {
      const response = await axios_private.post("/order/orders", orders);
      console.log(response);
      tost.success("Order created successfully");
      setOrders([order_model]);
    } catch (err: any) {
      console.log(err);
      if (err.response) {
        tost.error(err.response.data.message);
      } else if (err.status === 400) {
        tost.error(err.message);
      } else {
        tost.error("Something went wrong");
      }
    }
  };

  if (o.isLoading) return <div>Loading...</div>;
  if (o.error) return <div>Erro...</div>;
  if (!o.data?.data) return <div>Erro...</div>;

  return (
    <form
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
      onSubmit={handleSubmmit}
    >
      {orders.map((o) => (
        <Inputs
          key={o.id}
          data={o.data?.data?.data}
          order={o}
          setOrders={setOrders}
          order_model={order_model}
          isCreating
        />
      ))}
      <div className="bg-white rounded dark:bg-gray-700 shadow-md flex justify-center items-center">
        <button
          type="submit"
          className="border px-8 py-1 my-3 font-semibold text-lg rounded bg-green-500 text-white hover:bg-green-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddNew;

export interface Order {
  id: number;
  brand_id: string;
  order_type: string;
  user_id: number;
  order_items: any[];
}
