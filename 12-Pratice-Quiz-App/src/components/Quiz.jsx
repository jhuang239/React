import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const isQuizOver = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((preAnswers) => {
      return [...preAnswers, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (isQuizOver) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
