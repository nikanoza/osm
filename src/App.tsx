import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Panel } from "./components";
import Home from "./views/Home";

function App() {
  const [dark, setDark] = useState<boolean>(false);

  return (
    <>
      <Panel dark={dark} setDark={setDark} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Cup} />
      </Routes>
    </>
  );
}

export default App;
