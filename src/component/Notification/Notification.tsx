import { useState } from "react";

export default function Notification() {
  const [notification, setNotification] = useState(false);

  const handleNotification = () => {
    setNotification(!notification);
    console.log("Notification Work!");
  };

  return (
    <>
      <img
        src="https://cdn-icons-png.flaticon.com/128/5379/5379463.png"
        alt="notification"
        width={24}
        className="absolute top-17 left-400 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
        onClick={handleNotification}
      />
    </>
  );
}
