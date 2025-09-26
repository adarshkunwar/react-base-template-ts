import { ROUTELIST } from "./routeList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const RouteComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTELIST.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default RouteComponent;
