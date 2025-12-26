"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.container}>
        {/* LEFT */}
        <div style={styles.left}>
          <p style={styles.intro}>Hi, I’m</p>

          <h2 style={styles.name}>Eswar Kumar Korasika</h2>

          <h1 style={styles.title}>
            SOC & <br />
            Cybersecurity <br />
            <span style={styles.highlight}>Analyst</span>
          </h1>

          {/* ICON BUTTONS */}
          <div style={styles.icons}>
            <a
              href="https://github.com/eswar34"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.iconBtn}
            >
              <Image
                src="/icons/github.png"
                alt="GitHub"
                width={22}
                height={22}
              />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/eswar-504a1129b"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.iconBtn}
            >
              <Image
                src="/icons/linkedin.png"
                alt="LinkedIn"
                width={22}
                height={22}
              />
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.iconBtn}
            >
              <Image
                src="/icons/resume.png"
                alt="Resume"
                width={22}
                height={22}
              />
              Resume
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div style={styles.right}>
          <p style={styles.description}>
            Aspiring SOC Analyst with hands-on experience in security
            monitoring, Linux system analysis, and threat detection.
            Familiar with SOC workflows, SIEM fundamentals, log analysis,
            and incident triage. Passionate about defending systems and
            continuously improving cybersecurity skills.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================= STYLES ================= */

const styles = {
  hero: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    background: "#000",
    color: "#fff",
  },

  container: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "60px",
    padding: "0 24px",
  },

  left: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  intro: {
    color: "#aaa",
    fontSize: "16px",
  },

  name: {
    fontSize: "22px",
    fontWeight: "500",
    color: "#d1d5db",
  },

  title: {
    fontSize: "64px",
    fontWeight: "800",
    lineHeight: "1.1",
  },

  highlight: {
    color: "#a78bfa",
  },

  icons: {
    display: "flex",
    gap: "14px",
    marginTop: "24px",
    flexWrap: "wrap",
  },

  iconBtn: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 16px",
    borderRadius: "12px",
    border: "1px solid #222",
    background: "#0f0f1a",
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
    transition: "all 0.25s ease",
  },

  right: {
    display: "flex",
    alignItems: "center",
  },

  description: {
    color: "#bbb",
    fontSize: "18px",
    lineHeight: "1.7",
    maxWidth: "520px",
  },
  title: {
  fontSize: "68px",
  fontWeight: "700",
  lineHeight: "1.05",
},

};
