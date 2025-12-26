"use client";

import Motion from "./Motion";
import Image from "next/image";

export default function Certifications() {
  return (
    <section id="certifications" style={styles.section}>
      <h2 style={styles.heading}>
        <span style={styles.line}>—</span> Certifications
      </h2>

      <div style={styles.grid}>
        {/* ⭐ GOOGLE */}
        <Motion direction="left" delay={0}>
          <div style={{ ...styles.card, ...styles.highlight }} className="card-hover">
            <div style={styles.logoWrap}>
              <Image
                src="/logos/google.png"
                alt="Google"
                width={120}
                height={40}
                style={styles.logo}
              />
            </div>

            <h3 style={styles.title}>
              Google Cybersecurity Professional Certificate
            </h3>
            <p style={styles.issuer}>Google</p>

            <p style={styles.desc}>
              Comprehensive cybersecurity program covering SOC operations,
              SIEM concepts, incident response, threat detection, Linux,
              SQL, and security fundamentals.
            </p>

            <span style={styles.badge}>⭐ Featured Certification</span>
          </div>
        </Motion>

        {/* PALO ALTO */}
        <Motion direction="right" delay={150}>
          <div style={styles.card} className="card-hover">
            <div style={styles.logoWrap}>
              <Image
                src="/logos/paloalto.png"
                alt="Palo Alto Networks"
                width={140}
                height={40}
                style={styles.logo}
              />
            </div>

            <h3 style={styles.title}>Cyber Security Internship</h3>
            <p style={styles.issuer}>Palo Alto Networks</p>

            <p style={styles.desc}>
              Exposure to enterprise cybersecurity concepts, firewall basics,
              and SOC-oriented security practices.
            </p>
          </div>
        </Motion>

        {/* EDUSKILLS */}
        <Motion direction="left" delay={300}>
          <div style={styles.card} className="card-hover">
            <div style={styles.logoWrap}>
              <Image
                src="/logos/eduskills.png"
                alt="EduSkills Academy"
                width={140}
                height={40}
                style={styles.logo}
              />
            </div>

            <h3 style={styles.title}>Ethical Hacker (Internship)</h3>
            <p style={styles.issuer}>EduSkills Academy</p>

            <p style={styles.desc}>
              Practical exposure to ethical hacking fundamentals,
              vulnerability assessment, and penetration testing concepts.
            </p>
          </div>
        </Motion>

        {/* CISCO – ETHICAL HACKER */}
        <Motion direction="right" delay={450}>
          <div style={styles.card} className="card-hover">
            <div style={styles.logoWrap}>
              <Image
                src="/logos/cisco.png"
                alt="Cisco"
                width={110}
                height={40}
                style={styles.logo}
              />
            </div>

            <h3 style={styles.title}>Ethical Hacker</h3>
            <p style={styles.issuer}>Cisco</p>

            <p style={styles.desc}>
              Learned ethical hacking principles, attack methodologies,
              and security awareness techniques.
            </p>
          </div>
        </Motion>

        {/* CISCO – PYTHON */}
        <Motion direction="left" delay={600}>
          <div style={styles.card} className="card-hover">
            <div style={styles.logoWrap}>
              <Image
                src="/logos/cisco.png"
                alt="Cisco"
                width={110}
                height={40}
                style={styles.logo}
              />
            </div>

            <h3 style={styles.title}>Python Essentials</h3>
            <p style={styles.issuer}>Cisco</p>

            <p style={styles.desc}>
              Built strong Python foundations for scripting,
              automation, and problem-solving.
            </p>
          </div>
        </Motion>
      </div>
    </section>
  );
}

/* ================= STYLES ================= */

const styles = {
  section: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "100px 24px",
  },

  heading: {
    fontSize: "28px",
    marginBottom: "60px",
    display: "flex",
    gap: "12px",
    justifyContent: "center",
  },

  line: { color: "#a78bfa" },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "40px",
  },

  card: {
    position: "relative",
    background: "#0f0f1a",
    border: "1px solid #222",
    borderRadius: "18px",
    padding: "28px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  highlight: {
    border: "1px solid #a78bfa",
    boxShadow: "0 0 0 1px rgba(167,139,250,0.25)",
  },

  logoWrap: {
    position: "absolute",
    top: "18px",
    right: "18px",
    maxWidth: "120px",
    maxHeight: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.9,
  },

  logo: {
    width: "auto",
    height: "28px",
    objectFit: "contain",
  },

  title: {
    color: "#c4b5fd",
    fontSize: "18px",
    marginTop: "10px",
  },

  issuer: {
    color: "#aaa",
    fontSize: "14px",
  },

  desc: {
    color: "#ccc",
    fontSize: "14px",
    lineHeight: "1.7",
  },

  badge: {
    marginTop: "14px",
    alignSelf: "flex-start",
    padding: "6px 12px",
    fontSize: "12px",
    borderRadius: "999px",
    background: "linear-gradient(90deg, #a78bfa, #7c3aed)",
    color: "#000",
    fontWeight: "600",
  },
};
