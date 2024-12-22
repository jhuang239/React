import { useState } from "react";

export default function Player({ name, playerSymbol, isActive, onChangeName }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    function handleEdit() {
        setIsEditing((editing) => !editing);
        if (isEditing) {
            onChangeName(playerSymbol, playerName);
            console.log(playerName);
        }
    }

    function handleChange(e) {
        setPlayerName(e.target.value);
    }

    let playerNameInput = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        playerNameInput = <input type="text" value={playerName} required onChange={handleChange} />;
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {playerNameInput}
                <span className="player-symbol">{playerSymbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}
