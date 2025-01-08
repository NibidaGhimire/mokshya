import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
// import { useAuthContext } from "./context/AuthContext";
import Learn from "./pages/Learn";
import Play from "./pages/Play";
import UserProfile from "./pages/UserProfile";
import GetPro from "./pages/GetPro";

function App() {
  // const { authUser } = useAuthContext();

  return (
    <div className="my-2 mx-4">
      {/* <Routes>
        <Route
          path="/*"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/learn"
          element={authUser ? <Learn /> : <Navigate to="/login" />}
        />

        <Route
          path="/play"
          element={authUser ? <Play /> : <Navigate to="/login" />}
        />

        <Route
          path="/profile"
          element={authUser ? <UserProfile /> : <Navigate to="/login" />}
        />

        <Route
          path="/getpro"
          element={authUser ? <GetPro /> : <Navigate to="/login" />}
        />

        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Routes> */}
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/learn" element={<Learn />} />

        <Route path="/play" element={<Play />} />

        <Route path="/profile" element={<UserProfile />} />

        <Route path="/getpro" element={<GetPro />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
