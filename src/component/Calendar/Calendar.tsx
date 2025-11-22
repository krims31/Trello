export default function Calendar() {
  return (
    <>
      <button className="text-black -ml-163 mt-22 absolute top-100 text-1xl cursor-pointer transition duration-300 ease-in-out">
        Calendar
        <img
          src="https://cdn-icons-png.flaticon.com/128/3239/3239948.png"
          alt="tasks"
          className="w-6 -mt-7 -ml-8"
        />
        <p className="text-xs mt-10 -ml-17 text-gray-600">Your Boards</p>
      </button>
    </>
  );
}
