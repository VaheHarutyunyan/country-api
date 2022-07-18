import React from "react";

function CardDetail({ name, img, detail }) {
  return (
    <div className="country-detail">
      <div className="country-detail-img">
        <img src={img} alt="" width={300} height={300} />
      </div>
      <div className="country-detail-header">
        <h2>{name}</h2>
      </div>
      <div className="country-detail-row">
        {detail.map(({ title, value }) => {
          return (
            <div className="country-detail-col" key={title}>
              <b>{title}</b>: <span>{value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardDetail;
