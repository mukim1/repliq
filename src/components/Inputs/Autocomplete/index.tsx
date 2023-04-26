import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../../Contexts/Auth_context";
import useToast from "../../../hooks/useToast";
import { Product } from "../../../Types/product_type";

export const Autocomplete = () => {
  const [data, setData] = useState([] as any);
  const auth = useAuth();
  const tst = useToast();
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([] as any);
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);

  const handleInputValueChange = (event: any) => {
    const value = event.target.value;
    setInputValue(value);
    setIsSuggestionsOpen(true);
    setSelectedSuggestionIndex(0);
    setSuggestions(getSuggestions(value));
  };

  const handleSuggestionClick = (suggestion: any) => {
    setInputValue(suggestion);
    setIsSuggestionsOpen(false);
  };

    const handleKeyDown = (event: any) => {
      if (event.key === "ArrowUp") {
        if (selectedSuggestionIndex > 0) {
          setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
        }
      } else if (event.key === "ArrowDown") {
        if (selectedSuggestionIndex < suggestions.length - 1) {
          setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
        }
      } else if (event.key === "Enter") {
        setInputValue(suggestions[selectedSuggestionIndex].name);
        setIsSuggestionsOpen(false);
      }
    };

  useEffect(() => {
    if (!auth.user.token) {
      console.log("no token");
      return;
    }
    try {
      (async () => {
        const res = await axios({
          method: "get",
          url: "/product/getall",
          headers: {
            brand_id: "63726f4d4d1b8ce66087454a",
            token: auth.user.token,
          },
        });
        setData(res.data);
      })();
    } catch (err: any) {
      tst.error(err.response.data.message);
    }
  }, [auth.user.token]);

  const getSuggestions = (value: any) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    //   return inputLength === 0
    //     ? []
    //     : countries.filter(
    //         // (country) => country.toLowerCase().slice(0, inputLength) === inputValue
    //         (country) => country.toLowerCase().includes(inputValue) === true
    //       );

    return inputLength === 0
      ? []
      : data.data?.filter(
          // (country) => country.toLowerCase().slice(0, inputLength) === inputValue
          (v: Product) => v.name.toLowerCase().includes(inputValue) === true
        );
  };

  console.log(suggestions);

  return (
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputValueChange}
        onKeyDown={handleKeyDown}
        className="w-full border border-gray-300 rounded-md p-2"
      />
      {isSuggestionsOpen && inputValue && (
        <ul className="absolute top-10 left-0 w-full bg-white shadow rounded-md max-h-80 overflow-y-auto">
          {suggestions?.map((d: Product, index: any) => (
            <li
              key={d.id}
              className={`p-2 ${
                index === selectedSuggestionIndex ? "bg-gray-300" : ""
              }`}
              onClick={() => handleSuggestionClick(d.name)}
            >
              {d.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
];
