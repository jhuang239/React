import { useState, useEffect } from "react";

export default function QuestionTimer({ timeOut, onTimeOut, mode }) {
  const [timeLeft, setTimeLeft] = useState(timeOut);

  useEffect(() => {
    console.log("timeOut");
    const timer = setTimeout(onTimeOut, timeOut);

    return () => clearTimeout(timer);
  }, [timeOut, onTimeOut]);

  useEffect(() => {
    console.log("timeInterval");
    const timeInterval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 100);
    }, 100);

    return () => clearInterval(timeInterval);
  }, []);

  return <progress id="question-time" max={timeOut} value={timeLeft} className={mode} />;
}
