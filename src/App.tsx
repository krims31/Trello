import { useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import ArrowBack from "./component/ArrowBack/ArrowBack";
import Boards from "./component/board/Boards";
import Calendar from "./component/Calendar/Calendar";
import Choice from "./component/ChooiceProject/Choice";
import LoginAuth from "./component/LoginAuth/LoginAuth";
import Members from "./component/members/Members";
import { Navig } from "./component/Navig/Navig";
import NightMode from "./component/Night mode/NightMode";
import Notification from "./component/Notification/Notification.tsx";
import ProfileLogin from "./component/ProfileLogin/ProfileLogin.tsx";
import Search from "./component/Search/Search.tsx";
import Settings from "./component/settings/Settings";
import Table from "./component/Table/Table";
import { ThemeProvider } from "./component/theme-context/ThemeProvider.tsx";
import ToDo from "./component/Todo/ToDo.tsx";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [projects, setProjects] = useState<string[]>([]);

  const handleAddProject = (projectName: string) => {
    setProjects((prev) => [...prev, projectName]);
  };

  const handleLogin = () => {
    setIsAuth(true);
  };

  const handleLogout = () => {
    setIsAuth(false);
  };

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isAuth ? (
                <div className="bg-gray-50 rounded-3xl">
                  <button
                    onClick={handleLogout}
                    className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    Выйти
                  </button>
                  <Navig onAddProject={handleAddProject} />
                  <Boards />
                  <Members />
                  <Settings />
                  <Table />
                  <Calendar projects={projects} />
                  <NightMode />
                  <ArrowBack />
                  <Choice />
                  <Search />
                  <Notification />
                  <ProfileLogin />
                  <ToDo />
                </div>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/login"
            element={
              !isAuth ? (
                <LoginAuth onLogin={handleLogin} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
