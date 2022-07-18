import React from "react";

function Card({ img, name, info, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <h4>{name}</h4>
      <div className="card-body">
        <ul>
          {info.map((item) => (
            <li key={item.title}>
              <span>{item.title}</span>: <b>{item.description}</b>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Card;
