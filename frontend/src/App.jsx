import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { useAuthContext } from "./context/AuthContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const { authUser } = useAuthContext();

  return (
    <div className='h-screen w-screen overflow-hidden relative'>
      
      <div className='absolute top-4 right-4 z-50'>
        <ThemeToggle />
      </div>

      <Routes>
        <Route
          path='/'
          element={authUser ? <Home /> : <Navigate to='/login' />}
        />
        <Route
          path='/login'
          element={authUser ? <Navigate to='/' /> : <Login />}
        />
        <Route
          path='/signup'
          element={authUser ? <Navigate to='/' /> : <SignUp />}
        />
      </Routes>
    </div>
  );
}

export default App;