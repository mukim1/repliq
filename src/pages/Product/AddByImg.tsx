// import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import InputFile from "../../components/Inputs/InputFile";
import Inputs from "./Inputs";

const AddByImg = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    setValue,
  } = useForm({});

  const { append, remove, fields } = useFieldArray({
    control,
    name: "products",
  });

  const onSubmit = (data: any) => {
    data.products.forEach((product: any) => delete product.image);
    console.log(data);
    alert(JSON.stringify(data));
  };

  console.log(selectedFiles);
  console.log(fields);

  return (
    <div>
      {selectedFiles.length < 1 && (
        <InputFile setSelectedFiles={setSelectedFiles} multiple />
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 "
      >
        {selectedFiles.map((item: any, index) => (
          <div
            key={index}
            className="p-3 bg-white rounded-lg shadow dark:bg-gray-700 "
          >
            <img src={item} alt="product" width={100} height={100} />
            {/* <Inputs
              errors={errors}
              index={index}
              item={item}
              register={register}
              remove={remove}
              append={append}
              fields={fields}
            /> */}
          </div>
        ))}
        {/* {selectedFiles.length > 0 && (
          <Button
            type="submit"
            colorScheme={"teal"}
            variant="outline"
            size="lg"
            mr="5"
          >
            Submit
          </Button>
        )} */}
      </form>
    </div>
  );
};

export default AddByImg;
