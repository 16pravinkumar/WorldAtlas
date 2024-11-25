import { NavLink } from "react-router-dom";

export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  return (
    <>
      <div className="flip-card country-card">
        <div className="flip-card-inner container-card bg-white-box">
          <div className="flip-card-front">
            <img
              src={flags.svg}
              alt="Avatar"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <div className="flip-card-back ">
            <p className="card-title">
              {name.common.length > 10
                ? name.common.slice(0, 10) + "..."
                : name.common}
            </p>
            <p>
              <span className="card-description">Population:</span>
              {population.toLocaleString()}
            </p>
            <p>
              <span className="card-description">Region:</span> {region}
            </p>
            <p>
              <span className="card-description">Capital:</span>
              {capital}
            </p>

            <NavLink to={`/country/${name.common}`}>
              <button>Read More</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
