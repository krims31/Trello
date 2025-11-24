interface CalendarProps {
  projects: string[];
}

export default function Calendar({ projects }: CalendarProps) {
  return (
    <>
      <button className="text-black -ml-170 mt-22 absolute top-100 text-1xl cursor-pointer transition duration-300 ease-in-out">
        Calendar
        <img
          src="https://cdn-icons-png.flaticon.com/128/3239/3239948.png"
          alt="tasks"
          className="w-6 -mt-7 -ml-1"
        />
        <p className="text-xs mt-10 -ml-17 text-gray-600">Your Boards</p>
        <div className="mt-12 -ml-17 w-48">
          {projects.map((project, index) => (
            <div
              key={index}
              className="text-xs p-2 mb-1 ml-13 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer transition-colors"
            >
              {project}
            </div>
          ))}
        </div>
      </button>
    </>
  );
}
