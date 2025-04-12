"use client";

import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(10 * 60 * 1000); // 10 минут в миллисекундах
  const [running, setRunning] = useState(false);
  const [prevTime, setPrevTime] = useState(time);

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        setTime((prev) => Math.max(0, prev - 1)); // уменьшаем на 1 миллисекунду
      }, 1); // обновление каждую 1 миллисекунду
      return () => clearInterval(interval);
    }
  }, [running]);

  // Форматирование времени: минуты, секунды и миллисекунды
  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor(ms % 1000); // тысячные доли секунды
    return {
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
      milliseconds: milliseconds.toString().padStart(3, '0'),
    };
  };

  const { minutes, seconds, milliseconds } = formatTime(time);
  const { minutes: prevMinutes, seconds: prevSeconds, milliseconds: prevMilliseconds } = formatTime(prevTime);

  // Запоминаем предыдущее время для анимации
  useEffect(() => {
    setPrevTime(time);
  }, [time]);

  return (
    <div className="bg-black/30 p-4 rounded-xl text-center space-y-2">
      <div className="text-4xl font-mono flex justify-center items-center gap-1">
        {/* Минуты */}
        <div className="w-16">
          <div className={`animate-fall ${prevMinutes !== minutes ? 'falling' : ''}`}>{minutes}</div>
        </div>:
        {/* Секунды */}
        <div className="w-16">
          <div className={`animate-fall ${prevSeconds !== seconds ? 'falling' : ''}`}>{seconds}</div>
        </div>:
        {/* Миллисекунды (в тысячных долях) */}
        <div className="w-16">
          <div className={`animate-fall ${prevMilliseconds !== milliseconds ? 'falling' : ''}`}>{milliseconds}</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-4">
        <button className="bg-white text-black py-1 rounded" onClick={() => setRunning(!running)}>
          {running ? "Стоп" : "Старт"}
        </button>
        <button className="bg-white text-black py-1 rounded" onClick={() => setTime(10 * 60 * 1000)}>
          Сброс
        </button>
        <button className="bg-white text-black py-1 rounded" onClick={() => setTime((t) => Math.min(t + 60000, 99 * 60000))}>
          +1 мин
        </button>
        <button className="bg-white text-black py-1 rounded" onClick={() => setTime((t) => Math.min(t + 120000, 99 * 60000))}>
          +2 мин
        </button>
        <button className="bg-white text-black py-1 rounded" onClick={() => setTime(10 * 60 * 1000)}>
          =10 мин
        </button>
        <button className="bg-white text-black py-1 rounded" onClick={() => setTime((t) => Math.max(t - 60000, 0))}>
          -1 мин
        </button>
      </div>
    </div>
  );
}
