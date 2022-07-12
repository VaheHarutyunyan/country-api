import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReactSelect from "react-select";
import Card from "../component/Card";
import { loadCountry } from "../store/countries/countries-action";
import {
  getAllCountries,
  getCountries,
} from "../store/countries/countries-select";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countries = useSelector(getAllCountries);
  const { status, error, qty } = useSelector(getCountries);
  console.log(countries, status, error);
  useEffect(() => {
    if (!qty) {
      dispatch(loadCountry());
    }
  }, [qty, dispatch]);
  return (
    <div className="homepage">
      <div className="row">
        <div className="col">
          <input type="search" placeholder="Search" />
        </div>
        <div className="col">
          <ReactSelect placeholder="Choose country" />
        </div>
      </div>

      <div className="row row-country">
        {countries.map((country) => {
          const countryInfo = {
            name: country.name,
            img: country.flags.png,
            info: [
              {
                title: "Population",
                description: country.population.toLocaleString(),
              },
              {
                title: "Region",
                description: country.region,
              },
              {
                title: "Capital",
                description: country.capital,
              },
            ],
          };

          return (
            <Card
              key={country.name}
              {...countryInfo}
              onClick={() => navigate(`/country/${country.name}`)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
