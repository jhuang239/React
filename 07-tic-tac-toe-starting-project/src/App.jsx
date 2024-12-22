import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const initialPlayerNames = {
    X: "Player 1",
    O: "Player 2",
};

function deriveActivePlayer(gameTurns) {
    let currentPlayer = "X";
    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O";
    }
    return currentPlayer;
}

function deriveWinner(gameBoard, PlayerNames) {
    let winner = null;

    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

        if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
            winner = PlayerNames[firstSquareSymbol];
            break;
        }
    }

    return winner;
}

function deriveGameBoard(gameTurns) {
    let gameBoard = [...initialGameBoard.map((array) => [...array])];
    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }
    return gameBoard;
}

function App() {
    const [PlayerNames, setPlayerNames] = useState(initialPlayerNames);
    const [gameTurns, setGameTurns] = useState([]);

    const activePlayer = deriveActivePlayer(gameTurns);

    const gameBoard = deriveGameBoard(gameTurns);

    const winner = deriveWinner(gameBoard, PlayerNames);

    const hasDraw = gameTurns.length === 9 && !winner;

    function toggleActivePlayer(rowIndex, cellIndex) {
        setGameTurns((prevTurns) => {
            const currentPlayer = deriveActivePlayer(prevTurns);
            const newTurns = [{ square: { row: rowIndex, col: cellIndex }, player: activePlayer }, ...prevTurns];
            return newTurns;
        });
    }

    function handleRestart() {
        setGameTurns([]);
    }

    function handlePlayerNameChange(playerSymbol, newName) {
        setPlayerNames((prevPlayerNames) => {
            return {
                ...prevPlayerNames,
                [playerSymbol]: newName,
            };
        });
    }

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player
                        name={PlayerNames.X}
                        playerSymbol="X"
                        isActive={activePlayer === "X"}
                        onChangeName={handlePlayerNameChange}
                    />
                    <Player
                        name={PlayerNames.O}
                        playerSymbol="O"
                        isActive={activePlayer === "O"}
                        onChangeName={handlePlayerNameChange}
                    />
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
                <GameBoard onSelectCell={toggleActivePlayer} board={gameBoard} />
            </div>
            <Log turns={gameTurns} />
        </main>
    );
}

export default App;
