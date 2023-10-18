import { Route, Routes } from "react-router-dom";

import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";

function App() {

  return (
    <>
      <Routes>
        <Route path="/form1" element={<Form1 />}/>
        <Route path="/form2" element={<Form2 />}/>
        <Route path="/form3" element={<Form3 />}/>
      </Routes>
    </>
  );
}

export default App;
