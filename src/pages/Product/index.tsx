import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { MdOutlineAdd } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiAddToQueue } from "react-icons/bi";
import Inputs from "./Inputs";
import { useAuth } from "../../Contexts/Auth_context";
import axios from "axios";
import useToast from "../../hooks/useToast";

const AddNew = () => {
  const auth = useAuth();
  const tst = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    setValue,
  } = useForm({});
  const [hasMetaInfo, setHasMetaInfo] = useState(false);
  const { append, remove, fields } = useFieldArray({
    control,
    name: "products",
  });

  useEffect(() => {
    append({});
    return () => {
      remove(0);
    };
  }, []);

  const handleFileInputChange = (e: any, index: any) => {
    const rider = new FileReader();
    rider.readAsDataURL(e.target.files[0]);
    rider.onload = () => {
      const img = rider.result;
      setValue(`products[${index}].img`, img);
    };
  };

  const onSubmit = async (data: any) => {
    data.products.forEach((product: any) => {
      product["brand_id"] = auth.user.id;
      product["img"] = default_img;
      product.quantity = Number(product.quantity);
      product.unit_price = Number(product.unit_price);
      product.sell_price = Number(product.sell_price);
    });

    try {
      const res = await axios.post("/products", data.products);
      if (res.status === 200) {
        tst.success(res.data.InsertedIDs.length + " products added");
        fields.forEach((_, i) => remove(i));
      }
    } catch (err: any) {
      tst.error(err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=" grid grid-cols-6 gap-2 bg-white dark:bg-gray-700 w-full min-h-min mb-2 rounded p-3">
        <div className="col-start-5 col-end-6 grid content-center">
          <button
            type="button"
            className={
              `${hasMetaInfo ? "bg-cyan-500" : "bg-gray-500"} ` +
              "text-white px-2 py-1 rounded"
            }
            onClick={() => setHasMetaInfo((prev) => !prev)}
          >
            Meta Info
          </button>
        </div>
        <div className="col-start-6 col-end-7 grid content-center">
          <button
            type="submit"
            className="bg-teal-500 text-white px-2 py-1 rounded"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 ">
        {fields.map((_, index) => (
          <div
            key={index}
            className="p-3 bg-white rounded dark:bg-gray-700 shadow-md "
          >
            {getValues(`products[${index}].image`) ? (
              <img
                src={getValues(`products[${index}].image`)}
                alt="product"
                width={100}
                height={100}
              />
            ) : (
              <></>
            )}
            <input
              type="file"
              {...register(`products[${index}].img`)}
              onChange={(e) => handleFileInputChange(e, index)}
            />
            <Inputs
              errors={errors}
              index={index}
              register={register}
              hasMetaInfo={hasMetaInfo}
            />
            <div className="text-gray-700 dark:text-gray-100 flex gap-x-1">
              <button
                type="button"
                onClick={() => remove(index)}
                className={iconCls}
              >
                <RiDeleteBin6Line size={20} />
              </button>
              <button
                type="button"
                onClick={() => append(getValues(`products[${index}]`))}
                className={iconCls}
              >
                <BiAddToQueue size={20} />
              </button>
              <button
                type="button"
                onClick={() => append({})}
                className={iconCls}
              >
                <MdOutlineAdd size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </form>
  );
};

export default AddNew;
const default_img =
  "https://images.pexels.com/photos/9147616/pexels-photo-9147616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const iconCls =
  "p-2 rounded-full transition bg-gray-100 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500";
