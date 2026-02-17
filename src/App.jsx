import { Route, Routes } from "react-router-dom";
import Counter from "./routes/Counter";
import User from "./routes/User";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />

      <div className="h-[calc(100vh-100px)] w-screen flex justify-center items-center">
        <Routes>
          <Route path="" element={<Counter />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
