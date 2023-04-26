import React from "react";
import Outline from "./Outline";

const Textarea = (props: Props) => {
  const { name, id, label, placeholder, otherProps, row } = props;

  return (
    <Outline label={label} name={name} id={id}>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder || "Filled"}
        {...otherProps.register(name)}
        rows={row}
        className=" w-full outline-none pl-3 bg-transparent text-gray-700 dark:text-white tracking-wider placeholder:text-gray-300 dark:placeholder:text-gray-500 text-sm"
      ></textarea>
    </Outline>
  );
};

export default React.memo(Textarea);

type Props = {
  name: string;
  id: string;
  label: string;
  placeholder?: string;
  otherProps?: any;
  row?: number;
};
