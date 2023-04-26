import { memo, useEffect, useState } from "react";

interface Props {
  id: string;
  children: React.ReactNode;
  label: string;
  name: string;
  labelSize?: string;
  otherProps?: any;
}

const Outline = ({
  id,
  children,
  label,
  name,
  labelSize,
  otherProps,
}: Props) => {
  const [focus, setFocus] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if(!id) {
      return;
    }
    const form: any = document.getElementById(id || "1");
    const focusIn = form.addEventListener("focusin", () => setFocus(true));
    const focusOut = form.addEventListener("focusout", () => setFocus(false));
    return () => {
      form.removeEventListener("focusin", focusIn);
      form.removeEventListener("focusout", focusOut);
    };
  }, []);

  useEffect(() => {
    if (otherProps?.errors?.[name]) {
      setError(otherProps.errors[name][0]);
    } else {
      setError("");
    }
  }, [otherProps?.errors?.[name]]);

  return (
    <>
      <fieldset
        className={`border border-l-4 rounded font-thin text-xs tracking-wider overflow-hidden ${
          error ? "mb-1" : "mb-3"
        } ${
          error
            ? "border-red-500"
            : focus
            ? "border-cyan-500 dark:border-cyan-500"
            : "border-gray-500 dark:border-gray-300"
        }`}
      >
        <legend
          className={`ml-4 m-0 px-1 ${labelSize}  ${
            error
              ? "text-red-500"
              : focus
              ? " text-cyan-500 dark:text-cyan-300"
              : " dark:text-gray-100"
          }`}
        >
          {label}
        </legend>
        {children}
      </fieldset>
      {error && (
        <p className=" text-red-500 mb-3 text-xs tracking-wider">{error}</p>
      )}
    </>
  );
};

export default memo(Outline);
