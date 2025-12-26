import Motion from "./Motion";

export default function WhatIDo() {
  return (
    <section id="whatido">
      <h2 style={styles.heading}>
        <span style={styles.line}>—</span> What I Do
      </h2>

      <div style={styles.grid}>
        <Motion direction="left" delay={0}>
          <div style={styles.card} className="card-hover">
            <h3 style={styles.title}>SOC & Security Monitoring</h3>
            <ul style={styles.list}>
              <li>Monitor security alerts</li>
              <li>Understand SOC workflows</li>
              <li>Analyze Linux system logs</li>
              <li>Assist incident analysis</li>
            </ul>
          </div>
        </Motion>

        <Motion direction="up" delay={120}>
          <div style={styles.card} className="card-hover">
            <h3 style={styles.title}>Linux & Bash Automation</h3>
            <ul style={styles.list}>
              <li>Linux enumeration</li>
              <li>Bash scripting</li>
              <li>Security automation</li>
              <li>Permission & process checks</li>
            </ul>
          </div>
        </Motion>

        <Motion direction="right" delay={240}>
          <div style={styles.card} className="card-hover">
            <h3 style={styles.title}>Networking & Threat Basics</h3>
            <ul style={styles.list}>
              <li>TCP/IP, DNS, HTTP</li>
              <li>Common attack vectors</li>
              <li>Firewall fundamentals</li>
              <li>Network troubleshooting</li>
            </ul>
          </div>
        </Motion>
      </div>
    </section>
  );
}

const styles = {
  heading: {
    fontSize: "28px",
    marginBottom: "60px",
    display: "flex",
    gap: "12px",
  },
  line: { color: "#a78bfa" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "32px",
  },
  card: {
    background: "#0f0f1a",
    border: "1px solid #222",
    borderRadius: "18px",
    padding: "28px",
    height: "100%",
  },
  title: { color: "#c4b5fd", marginBottom: "16px" },
  list: { listStyle: "none", padding: 0, color: "#ddd", lineHeight: "1.9" },
};
