import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CardDetail from "../component/CardDetail";
import {
  loadCountryByName,
  setClearDetail,
} from "../store/details/details-action";
import { selectDetails } from "../store/details/details-select";

const Detail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentCountry, error, status } = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name));
    return () => {
      dispatch(setClearDetail());
    };
  }, [dispatch, name]);
  return (
    <div className="details">
      <div className="row">
        <button className="btn-outline" onClick={() => navigate(-1)}>Back</button>
      </div>
      <div className="row">
        <p>Status: {status}</p>
        {error && <p>Error: {error}</p>}
      </div>
      <div className="row">
        {status === "loading" ? (
          <h1>Loading..</h1>
        ) : (
          <div className="card-detail">
            {currentCountry && <CardDetail {...currentCountry} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
