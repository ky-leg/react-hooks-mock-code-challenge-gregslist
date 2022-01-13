import React from "react";
import Search from "./Search";

function Header({handleSubmit}) {

  function onSubmit(search){
    handleSubmit(search)
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSubmit={onSubmit}/>
    </header>
  );
}

export default Header;
