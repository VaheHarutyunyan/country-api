import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Main from "./component/Main";
import Detail from "./pages/Detail";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/country/:name" element={<Detail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>
      </div>
    </div>
  );
}

export default App;
