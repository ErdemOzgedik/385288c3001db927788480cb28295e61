import React, { useEffect, useRef } from "react";
import "../styles/components/SearchField/searchField.css";

interface Props {
  term: string;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
}
const SearchField = ({ term, setTerm }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  return (
    <div className="search-field">
      <input
        className="search-field__input"
        ref={searchRef}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search "
      />
    </div>
  );
};

export default SearchField;
