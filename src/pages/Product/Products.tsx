import useToast from "../../hooks/useToast";
import { FiEdit } from "react-icons/fi";
import { RiShoppingCartLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import useReact_query from "../../hooks/useReact_query";

const List = () => {
  const tst = useToast();
  const { useProducts } = useReact_query();
  const p = useProducts();

  if (p.isLoading) return <div>Loading...</div>;
  if (p.error) return <div>Error...</div>;
  if (!p.data?.data) return <div>Data Not Found...</div>;

  return (
    <div>
      <h1>Product List</h1>
      <table className="w-full border-gray-400">
        <thead>
          <tr className="">
            {tds.map((td) => (
              <th key={td.name} className="border border-gray-400">
                {td.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {p.data.data?.data?.map((item: any) => {
            return (
              <tr key={item._id} className="">
                {tds.map(({ name }) =>
                  name === "action" ? (
                    <td key={name} className="border border-gray-400">
                      <div className="flex justify-center">
                        <button type="button" className={`${iconCls}`}>
                          <AiOutlineDelete size={16} />
                        </button>
                        <button type="button" className={iconCls}>
                          <FiEdit size={16} />
                        </button>
                        <button type="button" className={iconCls}>
                          <RiShoppingCartLine size={16} />
                        </button>
                      </div>
                    </td>
                  ) : (
                    <td key={name} className="border border-gray-400 p-1 pl-3">
                      {item[name]}
                    </td>
                  )
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
const iconCls =
  "p-[5px] m-1 rounded-full transition border border-gray-400 dark:border-gray-600 text-gray-500 hover:text-teal-600 dark:hover:text-cyan-600 dark:text-gray-300";

const tds = [
  {
    name: "name",
    label: "Name",
  },
  {
    name: "quantity",
    label: "Quantity",
  },
  {
    name: "unit_price",
    label: "Unit Price",
  },
  {
    name: "sell_price",
    label: "Sell Price",
  },
  {
    name: "action",
    label: "Action",
  },
];
