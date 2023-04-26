import React from "react";
import Outline from "./Outline";

const InputTwo = (props: Props) => {
  const { name, id, label, placeholder, onChange, type, otherProps } = props;

  return (
    <Outline label={label} id={id} name={name} otherProps={otherProps}>
      <input
        type={type || "text"}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        autoFocus
        autoComplete="off"
        // aria-describedby="uidnote"
        className="w-full pl-3 text-base outline-none bg-transparent text-gray-500 dark:text-white tracking-wider placeholder:text-gray-300 dark:placeholder:text-gray-500 pb-1"
      />
    </Outline>
  );
};

export default InputTwo;

type Props = {
  name: string;
  id: string;
  label: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  otherProps?: any;
};
