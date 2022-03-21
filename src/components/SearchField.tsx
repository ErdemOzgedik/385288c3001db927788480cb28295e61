import React, { FormEvent, useEffect, useRef } from "react";
import { isDesktop } from "react-device-detect";
import { IoMdSearch } from "react-icons/io";
import "../styles/components/SearchField/searchField.css";

interface Props {
  term: string;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit(e: FormEvent<HTMLFormElement>): void;
}
const SearchField = ({ term, setTerm, handleSubmit }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    isDesktop && searchRef.current?.focus();
  }, []);

  return (
    <form className="search-field" onSubmit={handleSubmit}>
      <input
        className="search-field__input"
        ref={searchRef}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search "
      />
      <button
        type="submit"
        className={
          term.length > 2 ? `search-field__icon active` : `search-field__icon`
        }
      >
        <IoMdSearch />
      </button>
    </form>
  );
};

export default SearchField;
