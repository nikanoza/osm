import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Panel } from "./components";
import { Cup, Home } from "./views";

function App() {
  const [dark, setDark] = useState<boolean>(false);

  return (
    <>
      <Panel dark={dark} setDark={setDark} />
      <Routes>
        <Route path="/" element={<Home dark={dark} />} />
        <Route path="/" element={<Cup dark={dark} />} />
      </Routes>
    </>
  );
}

export default App;
