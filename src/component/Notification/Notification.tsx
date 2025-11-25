import { useEffect, useRef, useState } from "react";

export default function Notification() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotification] = useState<string[]>([
    "Новое сообщение",
    "Напоминание: встреча в 16:00",
  ]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNotification = () => {
    setIsOpen(!isOpen);
    console.log("Notification Work!");
  };

  const addNotification = (message: string) => {
    setNotification((prev) => [message, ...prev]);
  };

  const clearNotification = () => {
    setNotification([]);
  };

  const removeNotification = (index: number) => {
    setNotification((prev) => prev.filter((_, i) => i !== index));
  };

  const notification = "Уведомление";
  const clearBtn = "Очистить все";
  const notNewNotification = "Нет новых уведомлений";
  const already = "Только что";
  const addTest = "Добавить тестовое уведомление";

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <div className="relative">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5379/5379463.png"
            alt="notification"
            width={24}
            className="absolute -top-192 left-270 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            onClick={handleNotification}
          />
        </div>

        {isOpen && (
          <div className="absolute -top-194 left-280 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-96 overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-gray-50">
              <h3 className="font-semibold text-gray-800">{notification}</h3>
              {notifications.length > 0 && (
                <button
                  onClick={clearNotification}
                  className="text-xs text-blue-500 hover:text-blue-700"
                >
                  {clearBtn}
                </button>
              )}
            </div>

            <div className="max-h-64 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-4 text-center text-gray-500">
                  {notNewNotification}
                </div>
              ) : (
                notifications.map((notification, index) => (
                  <div
                    key={index}
                    className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex justify-between items-start">
                      <p className="text-sm text-gray-700">{notification}</p>
                      <button
                        onClick={() => removeNotification(index)}
                        className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity ml-2"
                      >
                        ×
                      </button>
                    </div>
                    <span className="text-xs text-gray-400 mt-1">
                      {already}
                    </span>
                  </div>
                ))
              )}
            </div>

            <div className="p-3 border-t border-gray-200 bg-gray-50">
              <button
                onClick={() => addNotification("Новое тестовое уведомление")}
                className="w-full py-2 text-sm text-blue-500 hover:text-blue-700 transition-colors"
              >
                {addTest}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
