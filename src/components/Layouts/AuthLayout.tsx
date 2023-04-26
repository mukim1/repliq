import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  cls?: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  title: string;
}

const AuthLayout = (props: Props) => {
  const { children, handleSubmit, title } = props;
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <form
        onSubmit={handleSubmit}
        className="w-full md:mx-auto md:w-6/12 lg:w-4/12 bg-white dark:bg-gray-700 p-5 shadow-lg min-h-screen"
      >
        <h3 className="text-center text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-5 underline">
          {title}
        </h3>
        {children}

        <button
          type="submit"
          className={`w-full py-2 px-3 text-white bg-cyan-500 dark:bg-cyan-500 rounded-md focus:outline-none focus:bg-cyan-600 dark:focus:bg-cyan-600`}
        >
          {title}
        </button>

        <p className="text-center text-gray-500 dark:text-gray-300 mt-3">
          {title === "Sign In"
            ? "Don't have an account? "
            : "Already have an account? "}
          <Link
            to={title === "Sign In" ? "/signup" : "/signin"}
            className="text-cyan-500 dark:text-cyan-500 hover:underline"
          >
            {title === "Sign In" ? "Sign Up" : "Sign In"}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default AuthLayout;
