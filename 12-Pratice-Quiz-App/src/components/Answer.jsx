import { useRef } from "react";

export default function Answer({ answers, selectedAnswer, answerState, onSelectAnswer }) {
  const shuffledAnswersRef = useRef();

  if (!shuffledAnswersRef.current) {
    shuffledAnswersRef.current = [...answers];
    shuffledAnswersRef.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswersRef.current.map((answer, index) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = "";
        if (answerState === "answered" && isSelected) {
          cssClasses = "selected";
        }

        if ((answerState === "correct" || answerState === "wrong") && isSelected) {
          cssClasses = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button className={cssClasses} onClick={() => onSelectAnswer(answer)} disabled={answerState !== ""}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
