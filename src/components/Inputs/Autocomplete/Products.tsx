import { useState } from "react";
import { Product } from "../../../Types/product_type";

interface Props {
  data: Product[];
  dispatch: any;
}

export const Autocomplete = ({ data, dispatch }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([] as any);
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);

  const handleInputValueChange = (e: any) => {
    const { value } = e.target;
    setInputValue(value);
    // setIsSuggestionsOpen(true);
    setSelectedSuggestionIndex(0);
    setSuggestions(getSuggestions(value));
    if (value === "") {
      setIsSuggestionsOpen(false);
    } else {
      setIsSuggestionsOpen(true);
    }
  };

  const handleSuggestionClick = (x: Product) => {
    setInputValue(x.name);
    // setIsSuggestionsOpen(false);

    dispatch({
      type: "ADD",
      payload: x,
    });
  };

  const toggleSuggestions = () => {
    setIsSuggestionsOpen(!isSuggestionsOpen);
    setSuggestions(data);
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
      // setInputValue(suggestions[selectedSuggestionIndex].name);
      // setIsSuggestionsOpen(false);
      handleSuggestionClick(suggestions[selectedSuggestionIndex]);
    }
  };

  const getSuggestions = (prop: any) => {
    const value = prop.trim().toLowerCase();

    return data?.filter(
      (v: Product) => v.name.toLowerCase().includes(value) === true
    );
  };

  return (
    <div className="relative">
      <div className="flex border mb-2 rounded hover:border-slate-300">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputValueChange}
          onKeyDown={handleKeyDown}
          className="w-full rounded-md p-2 outline-none bg-transparent"
        />
        <button type="button" onClick={toggleSuggestions} className="p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      {isSuggestionsOpen && (
        <ul className="absolute top-10 left-0 w-full bg-white dark:bg-gray-700 shadow rounded-md max-h-80 overflow-y-auto">
          {suggestions?.map((d: Product, index: any) => (
            <li
              key={d.name}
              className={`p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 ${
                index === selectedSuggestionIndex ? "bg-gray-300 dark:bg-gray-500" : ""
              }`}
              onClick={() => handleSuggestionClick(d)}
            >
              {d.name} - {d.unit_price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
