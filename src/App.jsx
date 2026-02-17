import { Route, Routes } from "react-router-dom";
import Counter from "./routes/Counter";
import User from "./routes/User";

function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Routes>
        <Route path="" element={<Counter />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
