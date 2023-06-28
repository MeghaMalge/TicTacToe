import { Tile } from "./Tile";

export const Board = ({ board, winner, handleClick, winningPattern }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {board.map((value, idx) => {
        return (
          <Tile
            bg={winningPattern?.includes(idx)}
            key={idx}
            value={value}
            onClick={() => value === null && !winner && handleClick(idx)}
          />
        );
      })}
    </div>
  );
};
