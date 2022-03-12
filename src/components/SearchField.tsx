import React from "react";
import "../styles/components/SearchField/searchField.css";

interface Props {
  term: string;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
}
const SearchField = ({ term, setTerm }: Props) => {
  return (
    <div className="search-field">
      <input
        className="search-field__input"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search "
      />
    </div>
  );
};

export default SearchField;
