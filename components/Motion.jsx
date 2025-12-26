"use client";

import { useEffect, useRef, useState } from "react";

export default function Motion({ children, direction = "up", delay = 0 }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (show) return "translate(0,0)";
    if (direction === "left") return "translateX(-40px)";
    if (direction === "right") return "translateX(40px)";
    return "translateY(40px)";
  };

  return (
    <div
      ref={ref}
      style={{
        width: "100%",          // 🔥 CRITICAL FIX
        display: "block",       // 🔥 CRITICAL FIX
        transform: getTransform(),
        opacity: show ? 1 : 0,
        transition: `all 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
