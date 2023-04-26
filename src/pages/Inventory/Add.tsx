import React from "react";
import { useForm } from "react-hook-form";
import InputOne from "../../components/Inputs/InputOne";
import Textarea from "../../components/Inputs/Textarea";

const Add = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <div className=" grid grid-cols-12 gap-4">
        <form className="col-start-2 md:col-start-4 col-span-10 md:col-span-6 p-4 shadow-sm rounded dark:bg-gray-700">
          <h2>Add new record</h2>
          <ul>
            <li>Select product</li>
            <InputOne
              placeholder="Product name"
              isError={errors.name}
              name="name"
              otherProps={{ register, errors }}
              helperText="Product name"
              label="Product name"
              type="text"
            />
            <li>Quantity</li>
            <InputOne
              placeholder="Quantity"
              isError={errors.quantity}
              name="quantity"
              otherProps={{ register, errors }}
              helperText="Quantity"
              label="Quantity"
              type="number"
            />
            <li>Unit Price</li>
            <li>Selling Price</li>
            <li>Expires On (type date)</li>
          </ul>
          <button
            type="button"
            className="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full mt-3"
          >
            Follow
          </button>
        </form>
      </div>
    </>
  );
};

export default Add;
