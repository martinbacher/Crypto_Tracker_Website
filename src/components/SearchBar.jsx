import React, { useState } from "react";

const SearchBar = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onFilter(term);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Coin..."
        className="p-3 bg-slate-800 my-4"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
