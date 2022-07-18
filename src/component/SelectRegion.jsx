import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactSelect from "react-select";
import { setRegion } from "../store/controls/controls-action";
import { selectRegion } from "../store/controls/controls-select";

const optionsMap = {
  Africa: { value: "Africa", label: "Africa" },
  Asia: { value: "Asia", label: "Asia" },
  America: { value: "America", label: "America" },
  Europe: { value: "Europe", label: "Europe" },
  Oceania: { value: "Oceania", label: "Oceania" },
};

const options = Object.values(optionsMap);

const SelectRegion = () => {
  const dispatch = useDispatch();
  const region = useSelector(selectRegion);

  const handleSelect = (region) => {
    dispatch(setRegion(region.value || ""));
  };
  console.log(region);

  return (
    <>
      <ReactSelect
        placeholder="Choose country"
        options={options}
        isClearable
        isSearchable={false}
        value={optionsMap[region] || region}
        onChange={handleSelect}
      />
    </>
  );
};

export default SelectRegion;
