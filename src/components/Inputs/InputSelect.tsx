import Outline from "./Outline";

const InputSelect = (props: Props) => {
  const { children, name, id, label, defaultValue, type, otherProps } = props;
  return (
    <Outline label={label} name={"animals"} id={id}>
      <select
        id={id}
        className="w-full bg-transparent pb-1 text-gray-700 dark:text-gray-200 placeholder-gray-400 focus:outline-none"
        name="animals"
        defaultValue={defaultValue}
        // onChange={onChange}
        {...otherProps?.register(name, {
          min: type === "number" ? 1 : undefined,
        })}
      >
        {children}
      </select>
    </Outline>
  );
};

export default InputSelect;

// interface Props {
//   id: string;
//   label: string;
//   children: any;
//   defaultValue: string;
//   onChange: any;
// }
type Props = {
  children: any;
  name: string;
  id: string;
  label: string;
  defaultValue?: string;
  type?: string;
  otherProps?: any;
};
