import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CardDetail from "../component/CardDetail";
import { loadCountryByName } from "../store/details/details-action";
import { selectDetails } from "../store/details/details-select";

const Detail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentCountry, error, status } = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name));
  }, [dispatch, name]);

  console.log(currentCountry, error, status);
  return (
    <div className="details">
      <div className="row">
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      <div className="row">
        <div className="card-detail">
          {currentCountry.map((d) => {
            const detailsInfo = {
              name: d.name,
              img: d.flags.png,
              detail: [
                { title: "Native Name", value: d.name },
                {
                  title: "Population",
                  value: d.population,
                },
                { title: "Region", value: d.region },
                { title: "Sub. region", value: d.subregion },
                { title: "Capital", value: d.capital },
                { title: "Top Level Domain", value: d.topLevelDomain },
                { title: "Currencies", value: d?.currencies?.name },
                { title: "Top Level Domain", value: d.topLevelDomain },
              ],
            };

            return <CardDetail key={d.name} {...detailsInfo} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Detail;
