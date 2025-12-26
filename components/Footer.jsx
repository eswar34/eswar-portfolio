export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.main}>
        © {new Date().getFullYear()} Eswar Kumar
      </p>
      <p style={styles.sub}>
        Built with Next.js · Deployed on Vercel
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "160px",
    padding: "60px 0 40px",
    borderTop: "1px solid #222",
    textAlign: "center",
  },
  main: {
    color: "#aaa",
    fontSize: "14px",
  },
  sub: {
    color: "#555",
    fontSize: "12px",
    marginTop: "8px",
  },
};
