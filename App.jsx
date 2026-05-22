import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return (
    <div className="card">
      <h1>Home</h1>
      <p>This is the Home page.</p>
    </div>
  );
}

function About() {
  return (
    <div className="card">
      <h1>About</h1>
      <p>This app uses React Router for navigation.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="card">
      <h1>Contact</h1>
      <p>Email: secdot@email.com</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={styles.app}>
        
        <nav style={styles.nav}>
          <h2 style={styles.logo}>Multi Page</h2>

          <div style={styles.links}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/about" style={styles.link}>About</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
          </div>
        </nav>

        <div style={styles.container}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #141e30, #243b55)",
    color: "white",
    fontFamily: "Arial",
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
  },

  logo: {
    color: "#00d4ff",
  },

  links: {
    display: "flex",
    gap: "20px",
  },

  link: {
    color: "white",
    textDecoration: "none",
    padding: "8px 14px",
    borderRadius: "8px",
    transition: "0.3s",
    background: "rgba(255,255,255,0.1)",
  },

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "60px 20px",
  },
};