import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../component/Card";
import Search from "../component/Search";
import SelectRegion from "../component/SelectRegion";
import { selectControls } from "../store/controls/controls-select";
import { loadCountry } from "../store/countries/countries-action";
import {
  getCountries,
  getVisibleCountries,
} from "../store/countries/countries-select";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search, region } = useSelector(selectControls);
  const countries = useSelector((state) =>
    getVisibleCountries(state, { search, region })
  );
  const { status, error, qty } = useSelector(getCountries);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountry());
    }
  }, [qty, dispatch]);
  return (
    <div className="homepage">
      <div className="row">
        <div className="col">
          <Search />
        </div>
        <div className="col">
          <SelectRegion />
        </div>
      </div>
      <div>
        <p>
          Status: <b>{status}</b>
        </p>
        <p>
          Error: <b>{error}</b>
        </p>
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
                description: country.region.toUpperCase,
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
