import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./utils/privateRoute";
import PublicRoutes from "./utils/publicRoute";
import BasicCalculator from "./pages/basicCalculator";
import PremiumCalculator from "./pages/premiumCalculator";

function App() { 
  return (
    <BrowserRouter>
      <Routes>
         <Route element={<PublicRoutes/>}>
          <Route element={<BasicCalculator />} path="/" />
        </Route>
        <Route element={<PrivateRoutes/>}>
          <Route element={<PremiumCalculator />} path="/home" />
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
