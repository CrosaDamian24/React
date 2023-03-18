import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Footer } from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        {/* <Footer /> */}
        {/* greeting={"Postres individuales"}  */}
        {/* */}
        <Routes>
          <Route            path="CrosaDamian24/React.git/"    element={<ItemListContainer />}  />
          <Route            path="/nostros"    element={<ItemListContainer />}  />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
