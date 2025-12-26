"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "whatido", label: "What I Do" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(SECTIONS[i].id);
        if (section && scrollPos >= section.offsetTop) {
          setActive(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={styles.wrapper}>
      <div style={styles.nav}>
        <a href="#home" style={styles.brand}></a>

        <div style={styles.links}>
          {SECTIONS.map((item) =>
            item.id === "contact" ? (
              <a
                key={item.id}
                href={`#${item.id}`}
                style={{
                  ...styles.cta,
                  boxShadow:
                    active === item.id
                      ? "0 0 0 3px rgba(167,139,250,0.35)"
                      : "none",
                }}
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.id}
                href={`#${item.id}`}
                style={{
                  ...styles.link,
                  color: active === item.id ? "#fff" : "#aaa",
                }}
              >
                {item.label}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
}

const styles = {
  wrapper: {
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1000,
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "36px",
    padding: "14px 28px",
    borderRadius: "999px",
    background: "rgba(15, 15, 26, 0.75)",
    backdropFilter: "blur(14px)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  brand: {
    color: "#fff",
    fontWeight: "700",
    textDecoration: "none",
  },
  links: {
    display: "flex",
    gap: "22px",
  },
  link: {
    fontSize: "14px",
    textDecoration: "none",
  },
  cta: {
    fontSize: "14px",
    padding: "8px 16px",
    borderRadius: "999px",
    background: "linear-gradient(90deg, #a78bfa, #7c3aed)",
    color: "#000",
    fontWeight: "600",
    textDecoration: "none",
  },
};
