import React, {useState} from "react";

function Search({handleSubmit}) {
  const [search, setSearch] = useState("")

  function onSubmit(e) {
    e.preventDefault();
    handleSubmit(search)
   
  }

  function onChange(e){
    setSearch(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={onSubmit}>
      <input
        onChange = {onChange}
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
