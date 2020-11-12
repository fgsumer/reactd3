import React from 'react';

const SearchZipcodes = ({ query, onSearchHandler }) => (
  <>
    <div className="contacts_list">
      <input
        className="search"
        placeholder="Search..."
        type="text"
        value={query}
        onChange={onSearchHandler}
      ></input>
    </div>
  </>
);

export default SearchZipcodes;
