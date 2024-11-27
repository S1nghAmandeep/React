import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
  const [progress, setProgress] = useState(timer);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => prevProgress - 10);
    }, 10);
    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  return <progress value={progress} max={timer} />;
}
