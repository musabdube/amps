"use client";

import { useEffect, useState } from "react";

export default function CursorBubble() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleClick = () => {
      setIsClicked(true);

      // Add ripple effect
      const rippleId = Date.now();
      setRipples((prev) => [...prev, { id: rippleId, x: position.x, y: position.y }]);

      // Remove clicked state after animation
      setTimeout(() => {
        setIsClicked(false);
      }, 600);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== rippleId));
      }, 800);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
    };
  }, [position]);

  return (
    <>
      {/* Main cursor bubble */}
      <div
        className={`pointer-events-none fixed rounded-full bg-[#102237] shadow-xl transition-all duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isClicked ? "scale-250" : "scale-100"}`}
        style={{
          width: "30px",
          height: "30px",
          left: `${position.x - 15}px`,
          top: `${position.y - 15}px`,
          zIndex: 9999,
        }}
      />

      {/* Ripple effects on click */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="pointer-events-none fixed rounded-full border-2 border-[#102237]"
          style={{
            width: "30px",
            height: "30px",
            left: `${ripple.x - 15}px`,
            top: `${ripple.y - 15}px`,
            zIndex: 9998,
            animation: `ripple 0.8s cubic-bezier(0.4, 0, 0.6, 1) forwards`,
          }}
        />
      ))}

      {/* Ripple animation keyframes */}
      <style>{`
        @keyframes ripple {
          0% {
            width: 30px;
            height: 30px;
            left: calc(var(--ripple-x) - 15px);
            top: calc(var(--ripple-y) - 15px);
            opacity: 1;
            border-width: 2px;
          }
          100% {
            width: 120px;
            height: 120px;
            left: calc(var(--ripple-x) - 60px);
            top: calc(var(--ripple-y) - 60px);
            opacity: 0;
            border-width: 1px;
          }
        }
      `}</style>
    </>
  );
}

