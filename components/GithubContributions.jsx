import Reveal from "./Reveal";

export default function GithubContributions() {
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>GitHub Contributions</h2>

      <div style={styles.grid}>
        <Reveal>
          <div className="card-hover" style={styles.card}>
            <h4>bash-recon-tool</h4>
            <p>Bash-based reconnaissance automation</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="card-hover" style={styles.card}>
            <h4>sql-fraud-detection</h4>
            <p>Fraud & anomaly detection using SQL</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="card-hover" style={styles.card}>
            <h4>network-risk-tool</h4>
            <p>Basic network security assessment</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const styles = {
  container: {
    marginTop: "100px",
  },
  heading: {
    fontSize: "30px",
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "25px",
  },
  card: {
    background: "#111",
    padding: "22px",
    borderRadius: "16px",
    border: "1px solid #222",
  },
};
