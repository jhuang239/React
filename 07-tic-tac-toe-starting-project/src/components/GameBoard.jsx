import { useState } from "react";

export default function GameBoard({ onSelectCell, board }) {
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((cell, cellIndex) => (
                            <li key={cellIndex}>
                                <button disabled={cell !== null} onClick={() => onSelectCell(rowIndex, cellIndex)}>
                                    {cell}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
