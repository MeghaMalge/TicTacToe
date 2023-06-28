export const Tile = ({ value, onClick, bg }) => {
  return (
    <div
      className={`w-20 h-20 ${
        bg
          ? "bg-green-300"
          : value === "x"
          ? "bg-blue-300"
          : value === "o"
          ? "bg-red-300"
          : "bg-gray-200"
      } flex justify-center items-center rounded-lg shadow-xl shadow-black hover:scale-105 transition-all duration-300 text-6xl font-bold text-center uppercase`}
      onClick={onClick}
    >
      {value}
    </div>
  );
};
