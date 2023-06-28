import { useEffect, useState } from "react";
import { Board } from "./components/Board";
import { winningPatterns } from "./constants";
import { Player } from "./components/Player";

function App() {
  const [winner, setWinner] = useState();
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("x");
  const [scores, setScores] = useState({ x: 0, o: 0 });
  const [pattern, setPattern] = useState([]);

  useEffect(() => {
    winner === "x" && setScores({ ...scores, x: scores.x + 1 });
    winner === "o" && setScores({ ...scores, o: scores.o + 1 });
  }, [winner]);

  const checkWinner = (board) => {
    winningPatterns.forEach((winningPattern) => {
      const [a, b, c] = winningPattern;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setWinner(board[a]);
        setPattern(winningPattern);
      }
    });
  };

  const handleClick = (index) => {
    const updatedBoard = board.map((val, idx) =>
      idx === index ? player : val
    );
    setBoard(updatedBoard);
    checkWinner(updatedBoard);
    setPlayer((prev) => (prev === "x" ? "o" : "x"));
  };

  return (
    <div className="h-screen w-full relative flex">
      <Player playerId="x" activePlayer={player} score={scores.x} />
      <section className="absolute w-80 top-52 lg:top-40 left-1/2 -translate-x-40 flex flex-col items-center gap-12 lg:gap-16">
        <Board
          board={board}
          winner={winner}
          handleClick={handleClick}
          winningPattern={winner && pattern}
        />
        <div className="flex justify-between w-full">
          <button
            onClick={() => {
              setBoard(Array(9).fill(null));
              setWinner("");
              setPlayer("x");
            }}
            className="btn"
          >
            Rematch
          </button>
          <button
            className="btn"
            onClick={() => {
              setBoard(Array(9).fill(null));
              setWinner("");
              setPlayer("x");
              setScores({ x: 0, o: 0 });
            }}
          >
            Reset
          </button>
        </div>
      </section>
      <Player playerId="o" activePlayer={player} score={scores.o} />
    </div>
  );
}

export default App;
