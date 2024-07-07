import React from "react";

const SearchResult = ({ className, SeaRchrasult, onTopourde }) => {
  return (
    <div className={className}>
      {SeaRchrasult?.map((item) => (
        <div
          className=" border-b-2 border-gray-400 px-2 py-2 hover:bg-gray-400"
          key={item.id}
          onClick={() => onTopourde(item)}
        >
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
