import { useState } from "react";

export default function ProfileLogin() {
  const [isOpen, setIsOpen] = useState(false);

  const logins = [
    { label: "Login", action: "login" },
    { label: "Sign Out", action: "logout" },
  ];

  const handleLoginAction = (action: string) => {
    setIsOpen(false);
    if (action === "login") {
      console.log("User logged in");
    } else if (action === "logout") {
      console.log("User logout in");
    }
  };

  return (
    <>
      <div className="absolute top-14 left-415">
        <div className="flex items-center gap-4">
          <img
            src="https://cdn-icons-png.flaticon.com/128/17446/17446833.png"
            alt="profile login"
            width={40}
            className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
          />

          <div
            className="flex items-center cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`text-lg transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            ></span>
          </div>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 mt-3 bg-white border border-gray-200 text-black rounded-lg shadow-xl z-10 min-w-48">
            {logins.map((loginOption) => (
              <div
                key={loginOption.action}
                className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors first:rounded-t-lg last:rounded-b-lg"
                onClick={() => {
                  handleLoginAction(loginOption.action);
                }}
              >
                {loginOption.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
