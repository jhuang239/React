import { useEffect, useState } from "react";

export default function ProgressBar({ max }) {
  const [remainingTime, setRemainingTime] = useState(3000);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("DeleteConfirmation interval");
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={max} />;
}
