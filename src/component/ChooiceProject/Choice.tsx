import { useState } from "react";

export default function Choice() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedName, setSelectedName] = useState("Project Plan");

  const options = ["Project Plan", "Development", "Testing", "Deployment"];

  return (
    <>
      <img
        className="absolute top-15 left-170"
        src="https://cdn-icons-png.flaticon.com/128/3446/3446400.png"
        alt="star"
        width={20}
      />
      <div className="absolute top-13 left-180">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h1 className="text-2xl mr-2 text-black">{selectedName}</h1>
          <span className="text-lg text-black">▼</span>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 mt-1 bg-white text-black border rounded shadow-lg z-10 min-w-40">
            {options.map((option) => (
              <div
                key={option}
                className="px-4 py-2 text-black cursor-pointer"
                onClick={() => {
                  setSelectedName(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
