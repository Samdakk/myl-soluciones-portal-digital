
import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    setTimeLeft(calculateTimeLeft());
    
    return () => clearInterval(timer);
  }, [targetDate]);
  
  return (
    <div className="glass p-6 rounded-lg w-full">
      <h3 className="text-xl font-semibold mb-4">Tiempo estimado para completar tu servicio</h3>
      <div className="grid grid-cols-4 gap-2 text-center">
        <div className="glass p-3 rounded-lg border border-gray-700">
          <div className="text-2xl md:text-3xl font-bold text-myl">{timeLeft.days}</div>
          <div className="text-xs text-gray-400">Días</div>
        </div>
        <div className="glass p-3 rounded-lg border border-gray-700">
          <div className="text-2xl md:text-3xl font-bold text-myl">{timeLeft.hours}</div>
          <div className="text-xs text-gray-400">Horas</div>
        </div>
        <div className="glass p-3 rounded-lg border border-gray-700">
          <div className="text-2xl md:text-3xl font-bold text-myl">{timeLeft.minutes}</div>
          <div className="text-xs text-gray-400">Minutos</div>
        </div>
        <div className="glass p-3 rounded-lg border border-gray-700">
          <div className="text-2xl md:text-3xl font-bold text-myl">{timeLeft.seconds}</div>
          <div className="text-xs text-gray-400">Segundos</div>
        </div>
      </div>
    </div>
  );
}
