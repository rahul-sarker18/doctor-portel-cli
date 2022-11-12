import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./components/Router/MainRouter";
import 'react-day-picker/dist/style.css';

function App() {
  return <div className="max-w-[1440px] mx-auto">
    <RouterProvider router={router}></RouterProvider>
  </div>;
}

export default App;
