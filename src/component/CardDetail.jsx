import React from "react";

function CardDetail({
  name,
  nativeName,
  flags,
  population,
  region,
  subregion,
  capital,
  currencies,
  topLevelDomain,
}) {
  return (
    <div className="country-detail">
      <div className="country-detail-img">
        <img src={flags?.png} alt="" width={300} height={300} />
      </div>
      <div className="country-detail-header">
        <h2>
          {name} / <i>{nativeName}</i>
        </h2>
      </div>
      <div className="country-detail-row">
        <div className="country-detail-col">
          <b>Population</b>: <span>{population}</span>
        </div>
        <div className="country-detail-col">
          <b>Region</b>: <span>{region}</span>
        </div>
        <div className="country-detail-col">
          <b>Sub. region</b>: <span>{subregion}</span>
        </div>
        <div className="country-detail-col">
          <b>Capital</b>: <span>{capital}</span>
        </div>
        <div className="country-detail-col">
          <b>Top Level Domain</b>: <span>{topLevelDomain}</span>
        </div>
        <div className="country-detail-col">
          <b>Currencies</b>: <span>{currencies[0]?.name}</span>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
