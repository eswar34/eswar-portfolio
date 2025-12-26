import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhatIDo from "../components/WhatIDo";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <Hero />
        <section style={styles.section}><WhatIDo /></section>
        <section style={styles.section}><Projects /></section>
        <section style={styles.section}><Certifications /></section>
        <section style={styles.section}><Contact /></section>
      </main>

      <Footer />
    </>
  );
}

const styles = {
  main: {
    backgroundColor: "#000",     // 🔥 force black
    minHeight: "100vh",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
  },
  section: {
    marginTop: "140px",
  },
};
