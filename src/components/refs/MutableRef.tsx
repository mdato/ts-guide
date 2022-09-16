import { useState, useRef, useEffect } from "react";

//para MutableRef debemos especificar el tipo de propiedad ej: <number | null>
export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<number | null>(null);

  const pauseTimer = () => {
    if (interValRef.current) {
      window.clearInterval(interValRef.current);
    }
  };

  const resetTimer = () => {
    if (interValRef.current) {
      window.clearInterval(interValRef.current);
      setTimer(0);
    }
  };

  const playTimer = () => {
    pauseTimer();
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      pauseTimer();
    };
  }, []);

  return (
    <div>
      <h5>HookTimer: {timer}</h5>
      <button onClick={() => pauseTimer()}>Pause Timer</button>
      <button onClick={() => playTimer()}>Play Timer</button>
      <button onClick={() => resetTimer()}>Reset Timer</button>
    </div>
  );
};
