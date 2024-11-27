import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [timeLeft, setTimeLeft] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => clearTimeout(timer);
  }, [onTimeout, timeout]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 100);
    }, 100);

    return () => clearInterval(timer);
  }, []);
  return (
    <progress
      id="question-time"
      max={timeout}
      value={timeLeft}
      className={mode}
    />
  );
}