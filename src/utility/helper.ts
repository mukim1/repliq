export const MOBILE_REGEX_BD = /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/;
export const handleThemeChange = (dark: boolean) => {
  if (dark) {
    document.documentElement.classList.add("dark");
    document.body.classList.remove("bg-blue-50");
    document.body.classList.add("bg-gray-900");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    document.body.classList.remove("bg-gray-900");
    document.body.classList.add("bg-blue-50");
    localStorage.theme = "light";
  }
};
