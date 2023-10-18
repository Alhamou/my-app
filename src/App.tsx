import { Route, Routes } from "react-router-dom";

import About from "./Form/About";
import Form from "./Form/Form";
import Home from "./Form/Home";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/form" element={<Form />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </>
  );
}

export default App;
