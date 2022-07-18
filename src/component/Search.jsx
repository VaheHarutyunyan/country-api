import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../store/controls/controls-action";
import { selectSearch } from "../store/controls/controls-select";

function Search() {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };
  return (
    <>
      <input
        type="search"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
      />
    </>
  );
}

export default Search;
