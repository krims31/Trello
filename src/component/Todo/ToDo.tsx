import { useState } from "react";

export default function ToDo() {
  const [cards, setCards] = useState<string[]>([]);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [addText, setAddText] = useState<string>("");

  const handleCopy = () => {
    console.log("Copy is work!");
  };

  // Функция удаления карточки по индексу
  const deleteCard = (index: number) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  const handleAddCardClick = () => {
    setIsAdding(true);
  };

  const handleSaveCard = () => {
    if (addText.trim()) {
      setCards([...cards, addText.trim()]);
      setAddText("");
      setIsAdding(false);
    }
  };

  const handleCancel = () => {
    setAddText("");
    setIsAdding(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSaveCard();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  const todo = "To do";
  const AddCard = "+ Add a card";

  return (
    <>
      <div className="bg-pink-50 w-90 h-95 absolute top-42 left-140 rounded-2xl p-4">
        <p className="text-black font-semibold mb-4">{todo}</p>
        <img
          src="https://cdn-icons-png.flaticon.com/128/11402/11402115.png"
          alt="..."
          width={50}
          className="absolute top-3 right-3 cursor-pointer"
        />
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 flex justify-between items-center group"
            >
              <span>{card}</span>
              <button
                onClick={() => deleteCard(index)}
                className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                title="Удалить карточку"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png"
                  alt="delete"
                  width={16}
                />
              </button>
            </div>
          ))}
        </div>

        {isAdding ? (
          <div className="mt-4">
            <textarea
              value={addText}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setAddText(e.target.value)
              }
              onKeyDown={handleKeyPress}
              placeholder="Введите задачу..."
              className="w-full p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-500"
              rows={3}
              autoFocus
            />
            <div className="flex gap-2 mt-2">
              <button
                onClick={handleSaveCard}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Добавить
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Отмена
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={handleAddCardClick}
            className="mt-4 cursor-pointer text-white bg-black hover:bg-gray-800 w-full py-2 rounded-lg transition-colors"
          >
            {AddCard}
          </button>
        )}

        <img
          src="https://cdn-icons-png.flaticon.com/128/9478/9478332.png"
          alt="copy"
          width={20}
          onClick={handleCopy}
          className="absolute bottom-4 right-4 cursor-pointer"
        />
      </div>
    </>
  );
}
