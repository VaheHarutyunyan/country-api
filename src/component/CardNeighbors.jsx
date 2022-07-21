import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadNeighborsCountries } from "../store/details/details-action";
import { selectNeighbors } from "../store/details/details-select";

function CardNeighbors({ borders = [] }) {
  const navigate = useNavigate();
  const neighbors = useSelector(selectNeighbors);
  const dispatch = useDispatch();
  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighborsCountries(borders));
    }
  }, [borders, dispatch]);
  console.log(neighbors);
  return (
    <div className="border-country-card">
      <h4>Borders Country</h4>
      <div className="border-country-list">
        {neighbors.map((item) => {
          return (
            <button
              className="btn-outline"
              key={item}
              onClick={() => navigate(`/country/${item}`)}
            >
              <span>{item}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CardNeighbors;
