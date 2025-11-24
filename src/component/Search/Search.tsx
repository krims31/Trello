export default function Search() {
  return (
    <>
      <input
        type="text"
        placeholder="Search Boards, cards..."
        className="absolute top-15 left-320 pl-7 p-2 border-0 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/128/2811/2811806.png"
        alt="magnifying glass"
        width={20}
        className="absolute top-17 left-321"
      />
    </>
  );
}
