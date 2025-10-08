import { Header } from "./components/layout/Header";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />       {/* bây giờ Header nằm trong Router */}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
