export default function Search() {
  return (
    <>
      <input
        type="text"
        placeholder="Search Boards, cards..."
        className="absolute top-13 left-280 pl-7 p-2 border-0 border-b-2 text-gray-500 border-gray-300 focus:border-blue-500 focus:outline-none"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/128/2811/2811806.png"
        alt="magnifying glass"
        width={20}
        className="absolute top-16 left-280"
      />
    </>
  );
}
