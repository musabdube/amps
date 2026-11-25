'use client';

import { useEffect, useRef } from 'react';

export default function MouseFollower() {
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (followerRef.current) {
        followerRef.current.style.left = e.clientX + 'px';
        followerRef.current.style.top = e.clientY + 'px';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={followerRef}
      className="fixed pointer-events-none z-50"
      style={{
        width: '40px',
        height: '40px',
        transform: 'translate(-50%, -50%)',
        transition: 'opacity 0.1s ease-out',
      }}
    >
      <div
        className="w-full h-full rounded-full border-2 border-blue-500"
        style={{
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.6), inset 0 0 20px rgba(59, 130, 246, 0.3)',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}
