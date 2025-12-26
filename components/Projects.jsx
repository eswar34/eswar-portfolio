import Motion from "./Motion";

export default function Projects() {
  return (
    <section id="projects">
      <h2 style={styles.heading}>
        <span style={styles.line}>—</span> Projects
      </h2>

      <div style={styles.grid}>
        {/* PROJECT 1 */}
        <Motion direction="up" delay={0}>
          <div style={styles.card} className="card-hover">
            <div style={{ ...styles.imageBox, ...styles.blue }}>
              SOC ALERT
            </div>

            <h3 style={styles.title}>
              SOC Alert Detection System
            </h3>

            <p style={styles.desc}>
              Python-based system to simulate SOC alert detection by
              analyzing logs and identifying suspicious activities
              for security monitoring.
            </p>

            <div style={styles.tech}>
              <span>Python</span>
              <span>SOC</span>
              <span>Log Analysis</span>
            </div>

            <p style={styles.meta}>Public · Updated 2 weeks ago</p>
          </div>
        </Motion>

        {/* PROJECT 2 */}
        <Motion direction="up" delay={120}>
          <div style={styles.card} className="card-hover">
            <div style={{ ...styles.imageBox, ...styles.purple }}>
              SQL FRAUD
            </div>

            <h3 style={styles.title}>
              SQL Fraud Detection
            </h3>

            <p style={styles.desc}>
              Fraud and anomaly detection system using SQL queries
              to identify abnormal transaction patterns in datasets.
            </p>

            <div style={styles.tech}>
              <span>Python</span>
              <span>SQL</span>
              <span>Data Analysis</span>
            </div>

            <p style={styles.meta}>Public · Updated 2 weeks ago</p>
          </div>
        </Motion>

        {/* PROJECT 3 */}
        <Motion direction="up" delay={240}>
          <div style={styles.card} className="card-hover">
            <div style={{ ...styles.imageBox, ...styles.green }}>
              NETWORK
            </div>

            <h3 style={styles.title}>
              Network Risk Assessment
            </h3>

            <p style={styles.desc}>
              Web-based project to assess basic network security risks
              and identify potential vulnerabilities or misconfigurations.
            </p>

            <div style={styles.tech}>
              <span>HTML</span>
              <span>Networking</span>
              <span>Security</span>
            </div>

            <p style={styles.meta}>Public · Updated 2 weeks ago</p>
          </div>
        </Motion>

        {/* PROJECT 4 */}
        <Motion direction="up" delay={360}>
          <div style={styles.card} className="card-hover">
            <div style={{ ...styles.imageBox, ...styles.orange }}>
              ENCRYPT
            </div>

            <h3 style={styles.title}>
              Encryption & Decryption (Bash)
            </h3>

            <p style={styles.desc}>
              Bash-based encryption and decryption tool to securely
              encode and decode files using Linux shell scripting.
            </p>

            <div style={styles.tech}>
              <span>Bash</span>
              <span>Linux</span>
              <span>Cryptography</span>
            </div>

            <p style={styles.meta}>Public · Updated recently</p>
          </div>
        </Motion>
      </div>
    </section>
  );
}

/* ================= STYLES ================= */

const styles = {
  heading: {
    fontSize: "28px",
    marginBottom: "60px",
    display: "flex",
    gap: "12px",
  },
  line: {
    color: "#a78bfa",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "40px",
  },
  card: {
    background: "#0f0f1a",
    border: "1px solid #222",
    borderRadius: "20px",
    padding: "26px",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  imageBox: {
    height: "170px",
    borderRadius: "14px",
    marginBottom: "22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    letterSpacing: "1px",
    color: "#fff",
    fontSize: "18px",
  },

  /* Gradient Variants */
  blue: {
    background: "linear-gradient(135deg, #2563eb, #1e3a8a)",
  },
  purple: {
    background: "linear-gradient(135deg, #7c3aed, #4c1d95)",
  },
  green: {
    background: "linear-gradient(135deg, #16a34a, #064e3b)",
  },
  orange: {
    background: "linear-gradient(135deg, #f97316, #7c2d12)",
  },

  title: {
    fontSize: "18px",
    color: "#c4b5fd",
    marginBottom: "10px",
  },
  desc: {
    color: "#ccc",
    lineHeight: "1.7",
    marginBottom: "18px",
  },
  tech: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "14px",
  },
  meta: {
    marginTop: "auto",
    fontSize: "13px",
    color: "#888",
  },
};
