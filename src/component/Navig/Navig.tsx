import { useState } from "react";
import "./Navig.css";

interface NavigProps {
  onAddProject: (projectName: string) => void;
}

export function Navig({ onAddProject }: NavigProps) {
  const [add, setAdd] = useState(false);

  const handleAddTask = () => {
    if (!add) {
      setAdd(true);
      const projectName = `Project ${Math.floor(Math.random() * 1000)}`;
      onAddProject(projectName);
      console.log("Add task", projectName);
    }
  };

  return (
    <div>
      <nav>
        <div>
          <div className="w-30 -ml-25 z-10">
            <img
              src="https://1000logos.net/wp-content/uploads/2021/05/Trello-logo.png"
              alt="trello"
            />
          </div>
        </div>
      </nav>
      <div className="bg-white w-70 h-200 -mt-17 -ml-30 border border-gray-100 rounded-3xl">
        <button
          onClick={handleAddTask}
          className="text-black ml-50 mt-5 text-2xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
        >
          +
        </button>
      </div>
    </div>
  );
}
