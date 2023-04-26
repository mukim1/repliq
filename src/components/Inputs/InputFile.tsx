interface Props {
  setSelectedFiles: any;
  name?: string;
  multiple?: boolean;
  otherProps?: any;
  width?: string;
}

const InputFile = ({ setSelectedFiles, name, multiple, width }: Props) => {
  const handleImageChange = (e: any) => {
    // console.log(e.target.files[])
    if (e.target.files) {
      const filesArray: any = Array.from(e.target.files).map((file: any) =>
        URL.createObjectURL(file)
      );

      setSelectedFiles((prevImages: any) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file: any) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  return (
    <div className="flex justify-center w-full mb-5">
      <label
        className={`flex justify-center ${
          width || "w-1/2"
        } h-32 px-4 transition bg-white dark:bg-gray-600 border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none`}
      >
        <span className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <span className="font-medium text-gray-600 dark:text-gray-200">
            Drop files to Attach, or{" "}
            <span className="text-blue-600 dark:text-blue-400 underline">
              browse
            </span>
          </span>
        </span>
        <input
          type="file"
          className="hidden"
          multiple={multiple ? true : false}
          onChange={handleImageChange}
        />
      </label>
    </div>
  );
};

export default InputFile;
