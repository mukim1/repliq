import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/Auth_context";
import { handleThemeChange } from "../../utility/helper";

const Header = () => {
  const navigate = useNavigate();
  const { user, dispatchUser } = useAuth();

  const handleSignOut = async () => {
    localStorage.clear();
    navigate("/signin");
    dispatchUser({ type: "REMOVE_USER" });
    // await axiosPrivate.post("/users/logout");
  };

  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("bg-gray-900");
      handleThemeChange(true);
      setDark(true);
    } else {
      document.body.classList.add("bg-blue-50");
    }
  }, []);

  const toggleLight = () => {
    setDark((p) => (handleThemeChange(!p), !p));
  };

  return (
    <nav className="flex bg-white dark:bg-gray-600 items-center justify-between p-4 rounded-md shadow">
      <div className="">
        <a>INVENTORY</a>
      </div>
      <div className=" flex gap-x-5 items-center">
        <span onClick={() => toggleLight()} className="cursor-pointer text-2xl">
          {dark ? <span>&#9728;</span> : <span>☪</span>}
        </span>
        <span>{user?.email}</span>
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    </nav>
  );
};

export default Header;
