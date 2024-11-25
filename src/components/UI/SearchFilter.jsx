import { useState } from "react";

const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  setCountryApiData,
  countryApiData,
}) => {
  const handleSearches = (e) => {
    setSearch(e.target.value);
  };

  const handleFilters = (e) => {
    setFilter(e.target.value);
  };

    const handleSort = (sort) => {
      if (sort === "Asc") {
        // [...countryApiData]  means we are apply sorting on copy of the original array
        setCountryApiData(
          [...countryApiData].sort((a, b) =>
            a.name.common.localeCompare(b.name.common)
          )
        );
      } else if (sort === "Desc") {
        setCountryApiData(
          [...countryApiData].sort((a, b) =>
            b.name.common.localeCompare(a.name.common)
          )
        );
      }
    };

  return (
    <section className="section-searchFilter container">
      <div>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={handleSearches}
        />
      </div>

      <div>
        <button onClick={() => handleSort("Asc")}>Asc</button>
      </div>

      <div>
        <button onClick={() => handleSort("Desc")}>Desc</button>
      </div>

      <div>
        <select
          className="select-section"
          value={filter}
          onChange={handleFilters}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};
export default SearchFilter;
