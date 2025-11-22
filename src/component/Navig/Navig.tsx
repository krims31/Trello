import "./Navig.css";

export function Navig() {
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
      <div className="bg-white w-70 h-200 -mt-17 -ml-30 border 1px solid black rounded-3xl">
        <button className="text-black ml-50 mt-5 text-2xl cursor-pointer">+</button>
      </div>
    </div>
  );
}
