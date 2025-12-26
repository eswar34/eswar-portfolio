"use client";
import { useEffect, useRef } from "react";

export default function Motion({ children, direction = "up", delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const translate =
    direction === "left"
      ? "translateX(-30px)"
      : direction === "right"
      ? "translateX(30px)"
      : "translateY(30px)";

  return (
    <div
      ref={ref}
      className="motion"
      style={{
        transform: translate,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
