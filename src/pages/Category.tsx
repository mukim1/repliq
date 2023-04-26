import axios from "axios";
import { useEffect, useState } from "react";
import InputFile from "../components/Inputs/InputFile";
import InputTwo from "../components/Inputs/InputTwo";
import { Modal } from "../components/Modals/Modal";

const category = () => {
  const [open, setOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [newCategory, setNewCategory] = useState({
    name: "",
    // img: selectedFiles[0],
    img: "https://unctad.org/sites/default/files/inline-images/ccpb_workinggroup_productsafety_800x450.jpg",
  });

  useEffect(() => {
    setNewCategory({
      ...newCategory,
      img: selectedFiles[0],
    });
  }, [selectedFiles]);

  const handleAddCategory = async () => {
    const res = await axios.post("/category", newCategory);
  };

  return (
    <div className=" m-2">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setOpen(true)}
      >
        Add Category
      </button>
      <Modal open={open} handleClose={() => setOpen(false)} clses="p-5">
        <InputFile width="w-full" setSelectedFiles={setSelectedFiles} />
        <InputTwo
          name={"name"}
          id={"1"}
          label={"Add new"}
          onChange={(e: any) =>
            setNewCategory({ ...newCategory, name: e.target.value })
          }
        />
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => console.log(newCategory)}
        >
          Add
        </button>
      </Modal>
    </div>
  );
};

export default category;
