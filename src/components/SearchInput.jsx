import React from "react";

export const SearchInput = ({ recieveInfo }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    recieveInfo(e.target.formInput.value);
  };

  return (
    <div className="search__input__container">
      <form className="search__form" onSubmit={handleSearch}>
        <input
          className="search__input"
          id="formInput"
          placeholder="Search pokemon"
          type="text"
        />
        <button className="search__button">search</button>
      </form>
    </div>
  );
};
