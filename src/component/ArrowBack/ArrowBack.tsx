export default function ArrowBack() {
  const handleClick = () => {
    console.log("ArrowBack clicked!");
  };
  return (
    <div>
      <button className="absolute top-13 left-150 border-white rounded-2xl p-2 bg-white cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110">
        <img
          src="https://cdn-icons-png.flaticon.com/128/9121/9121686.png"
          alt="arrow back"
          onClick={handleClick}
          width={20}
        />
      </button>
    </div>
  );
}
