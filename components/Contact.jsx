import Motion from "./Motion";

export default function Contact() {
  return (
    <section id="contact">
      <h2 style={styles.heading}>
        <span style={styles.line}>—</span> Contact
      </h2>

      <div style={styles.wrapper}>
        <Motion direction="left" delay={0}>
          <div style={styles.left}>
            <p style={styles.text}>
              I am actively seeking entry-level SOC Analyst or Cybersecurity
              roles where I can contribute to security monitoring and
              incident analysis while continuing to grow professionally.
            </p>

            <div style={styles.info}>
              <p><strong>Email:</strong> keswar431@gmail.com</p>
              <p><strong>Location:</strong> Machilipatnam, Andhra Pradesh, India</p>
              <p><strong>LinkedIn:</strong> linkedin.com/in/eswar-504a1129b</p>
            </div>
          </div>
        </Motion>

        <Motion direction="right" delay={150}>
          <div style={styles.right}>
            <p style={styles.cta}>Let’s connect</p>
            <a href="mailto:keswar431@gmail.com" style={styles.button}>
              Send Email →
            </a>
          </div>
        </Motion>
      </div>
    </section>
  );
}

const styles = {
  heading: { fontSize: "28px", marginBottom: "60px", display: "flex", gap: "12px" },
  line: { color: "#a78bfa" },
  wrapper: { display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "60px" },
  left: { color: "#ccc", lineHeight: "1.8" },
  text: { marginBottom: "30px" },
  info: { fontSize: "14px", color: "#bbb", lineHeight: "1.9" },
  right: { background: "#0f0f1a", border: "1px solid #222", borderRadius: "18px", padding: "36px" },
  cta: { color: "#c4b5fd", marginBottom: "20px" },
  button: { padding: "12px 22px", background: "linear-gradient(90deg, #a78bfa, #7c3aed)", color: "#000", borderRadius: "10px", textDecoration: "none" },
};
