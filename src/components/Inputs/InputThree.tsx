import Outline from "./Outline";

const InputThree = (props: Props) => {
  const { name, id, label, placeholder, type, otherProps } = props;

  return (
    <Outline label={label} name={name} id={id}>
      <input
        type={type || "text"}
        id={id}
        name={name}
        placeholder={placeholder}
        {...otherProps.register(name, {
          min: type === "number" ? 1 : undefined,
        })}
        className="w-full outline-none pl-3 pb-1 bg-transparent text-gray-700 dark:text-white tracking-wider placeholder:text-gray-300 dark:placeholder:text-gray-500 text-sm"
      />
    </Outline>
  );
};

export default InputThree;

type Props = {
  name: string;
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  otherProps?: any;
};
