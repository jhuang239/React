export default function Log({ turns }) {
    return (
        <ol id="log">
            {turns.map((turn, index) => (
                <li key={`${turn.square.row}${turn.square.col}`}>
                    <span>
                        {turn.player} placed an {turn.player} in square {turn.square.row}, {turn.square.col}
                    </span>
                </li>
            ))}
        </ol>
    );
}
