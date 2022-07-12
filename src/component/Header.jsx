import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/theme/theme-action";

const Header = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.type);
  const switchTheme = () => {
    dispatch(setTheme(theme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="header">
      <div className="row">
        <div className="col">
          <button className="btn-world">Where is the world</button>
        </div>
        <div className="col">
          <button className="btn-theme" onClick={switchTheme}>
            Theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
