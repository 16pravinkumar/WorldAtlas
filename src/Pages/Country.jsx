import { useEffect, useState, useTransition } from "react";
import { CountryCard } from "../components/UI/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";
import { getApiData } from "../api/postDataApi";
import { Loader } from "../components/UI/Loader";
const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countryApiData, setCountryApiData] = useState([]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("all");

  const [sort, setSort] = useState("");

  const fetchApiData = () => {
    startTransition(async () => {
      const res = await getApiData();
      setCountryApiData(res.data);
    });
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  // search based on user seraching
  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  // filter based on the selected region
  const filterRegion = (country) => {
    if (filter === "all") {
      return country;
    }
    return country.region === filter;
  };

  const filterCountries = countryApiData.filter((country) => {
    return searchCountry(country) && filterRegion(country);
  });

  // till data not loaded show loading
  if (isPending) return <Loader />;
  return (
    <>
      <section className="country-section container">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          countryApiData={countryApiData}
          setCountryApiData={setCountryApiData}
        />

        <ul className="grid grid-four-cols ">
          {filterCountries.length > 0 ? (
            filterCountries.map((curCountry, index) => {
              return <CountryCard country={curCountry} key={index} />;
            })
          ) : (
            <p>No countries found</p>
          )}
        </ul>
      </section>
    </>
  );
};
export default Country;
