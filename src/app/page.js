"use client";

import { useState, useEffect } from 'react';
import { Hammer, Wrench, Zap, Clock, Mail, Bell } from 'lucide-react';

export default function UnderConstruction() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 23,
    hours: 18,
    minutes: 45,
    seconds: 12
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Progress animation
    const progressTimer = setInterval(() => {
      setProgress(prev => prev >= 78 ? 78 : prev + 1);
    }, 50);

    // Countdown timer
    const countdownTimer = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = { ...prev };
        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes--;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours--;
            } else {
              newTime.hours = 23;
              if (newTime.days > 0) {
                newTime.days--;
              }
            }
          }
        }
        return newTime;
      });
    }, 1000);

    return () => {
      clearInterval(progressTimer);
      clearInterval(countdownTimer);
    };
  }, []);

  const constructionTools = [
    { icon: Hammer, color: 'text-yellow-500', delay: 0 },
    { icon: Wrench, color: 'text-blue-500', delay: 200 },
    { icon: Zap, color: 'text-orange-500', delay: 400 },
    { icon: Clock, color: 'text-purple-500', delay: 600 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-blue-200/30 dark:bg-blue-600/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className={`max-w-4xl w-full mx-auto transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-8">
            
            <h1 className="relative text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-200% animate-gradient bg-clip-text text-transparent">
              Under Construction
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 animate-fade-in-up">
            Something amazing is coming soon!
          </p>
          <p className="text-gray-500 dark:text-gray-400 animate-fade-in-up animation-delay-200">
            Mahi Singh is working on it 
          </p>
        </div>

        {/* Animated Tools */}
        <div className="flex justify-center items-center space-x-4 md:space-x-8 mb-12">
          {constructionTools.map(({ icon: Icon, color, delay }, index) => (
            <div
              key={index}
              className="animate-bounce-slow"
              style={{ animationDelay: `${delay}ms` }}
            >
              <div className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
                <Icon className={`w-8 h-8 md:w-12 md:h-12 ${color}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Progress Section */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Building in progress...
            </span>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
              {progress}%
            </span>
          </div>
          <div className="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-3 overflow-hidden backdrop-blur-sm">
            <div className="relative h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
                 style={{ width: `${progress}%` }}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-progress"></div>
            </div>
          </div>
        </div>


       
          
          
         
        </div>


      </div>

      
    
  );
}