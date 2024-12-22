import quizOver from "../assets/quiz-complete.png";
import QUESTION from "../questions";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null).length;
  const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTION[index].answers[0]);

  const skippedPercentage = Math.round((skippedAnswers / QUESTION.length) * 100);
  const correctPercentage = Math.round((correctAnswers.length / userAnswers.length) * 100);
  const wrongPercentage = 100 - skippedPercentage - correctPercentage;

  return (
    <div id="summary">
      <img src={quizOver} alt="quiz over" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedPercentage}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctPercentage}%</span>
          <span className="text">Correct</span>
        </p>
        <p>
          <span className="number">{wrongPercentage}%</span>
          <span className="text">Wrong</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClasses = "user-answer";

          if (answer === null) {
            cssClasses += " skipped";
          } else if (answer === QUESTION[index].answers[0]) {
            cssClasses += " correct";
          } else {
            cssClasses += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTION[index].text}</p>
              <p className={cssClasses}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
