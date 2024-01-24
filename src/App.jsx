import { useState } from "react";
import Children from "./components/Children";
import ParentComponent from "./components/ParentComponents";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <ParentComponent isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}>
        <Children></Children>
      </ParentComponent>
    </div>
  );
};

export default App;
