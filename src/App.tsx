import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Panel } from "./components";

function App() {
  const [dark, setDark] = useState<boolean>(false);

  return (
    <>
      <Panel dark={dark} setDark={setDark} />
      <Routes>
        <Route path="/" element={<>home</>} />
        <Route path="/" element={<>cup</>} />
      </Routes>
    </>
  );
}

export default App;
