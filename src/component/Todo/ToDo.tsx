export default function ToDo() {
  const handleCopy = () => {
    console.log("Copy is work!");
  };

  return (
    <>
      <div className="bg-pink-50 w-90 h-95 absolute top-42 left-150 rounded-2xl">
        <p className="absolute top-6 left-3 text-black">To do</p>
        <img
          src="https://cdn-icons-png.flaticon.com/128/11402/11402115.png"
          alt="..."
          width={50}
          className="mt-3 ml-76 cursor-pointer"
        />
        <button className="absolute top-82 left-5 cursor-pointer text-black">
          + Add a card
        </button>
        <img
          src="https://cdn-icons-png.flaticon.com/128/9478/9478332.png"
          alt="copy"
          width={20}
          onClick={handleCopy}
          className="absolute top-82 left-80 cursor-pointer"
        />
      </div>
    </>
  );
}
