interface Props {
  placeholder?: string;
  isError?: boolean;
  name: string;
  otherProps?: any;
  helperText?: string;
  label: string;
  type?: string;
  defaultValue?: string;
}

const InputOne = (props: Props) => {
  const { placeholder, name, otherProps, type, defaultValue } = props;

  return (
    <label className="text-gray-700" htmlFor={name}>
      <input
        type={type || "text"}
        name={name}
        placeholder={placeholder || "Filled"}
        multiple={false}
        {...otherProps.register(name)}
        defaultValue={defaultValue}
        id="create-account-pseudo"
        className=" rounded border dark:border-none w-full py-1 px-2 dark:bg-gray-600 text-gray-700 dark:text-gray-200 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 my-1"
      />
    </label>
  );
};

export default InputOne;
