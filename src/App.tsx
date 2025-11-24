import "./App.css";
import { Navig } from "./component/Navig/Navig";
import LoginAuth from "./component/LoginAuth/LoginAuth";
import Boards from "./component/board/Boards";
import Members from "./component/members/Members";
import Settings from "./component/settings/Settings";
import Table from "./component/Table/Table";
import Calendar from "./component/Calendar/Calendar";
import NightMode from "./component/Night mode/NightMode";
import { ThemeProvider } from "./component/theme-context/ThemeProvider.tsx";
import ArrowBack from "./component/ArrowBack/ArrowBack";
import Choice from "./component/ChooiceProject/Choice";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Navig />
        <LoginAuth />
        <Boards />
        <Members />
        <Settings />
        <Table />
        <Calendar />
        <NightMode />
        <ArrowBack />
        <Choice />
      </div>
    </ThemeProvider>
  );
}

export default App;
