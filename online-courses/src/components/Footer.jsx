import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* Logo + About */}
        <div>
          <h2 style={styles.logo}>EduCourses</h2>
          <p style={styles.text}>
            Upgrade your skills with modern online courses anytime, anywhere.
          </p>

          {/* Social Icons */}
          <div style={styles.icons}>
            <FaInstagram style={styles.icon} />
            <FaLinkedin style={styles.icon} />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={styles.heading}>Quick Links</h4>
          <p style={styles.link}>Home</p>
          <p style={styles.link}>Courses</p>
          <p style={styles.link}>Profile</p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 style={styles.heading}>Subscribe</h4>
          <p style={styles.text}>Get latest course updates</p>

          <div style={styles.inputBox}>
            <input
              type="email"
              placeholder="Enter your email"
              style={styles.input}
            />
            <button style={styles.button}>Subscribe</button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div style={styles.bottom}>
        © 2026 EduCourses | Designed with ❤️
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "50px",
    padding: "40px 20px",
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderTop: "1px solid rgba(255,255,255,0.2)",
    color: "#fff",
  },

  container: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "30px",
  },

  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#00e6e6",
  },

  heading: {
    marginBottom: "10px",
  },

  text: {
    color: "#ddd",
    maxWidth: "250px",
  },

  link: {
    cursor: "pointer",
    margin: "5px 0",
    color: "#ccc",
  },

  icons: {
    marginTop: "10px",
  },

  icon: {
    fontSize: "20px",
    marginRight: "10px",
    cursor: "pointer",
  },

  inputBox: {
    display: "flex",
    marginTop: "10px",
  },

  input: {
    padding: "8px",
    border: "none",
    outline: "none",
    borderRadius: "5px 0 0 5px",
  },

  button: {
    padding: "8px 12px",
    border: "none",
    background: "#00e6e6",
    color: "#000",
    cursor: "pointer",
    borderRadius: "0 5px 5px 0",
  },

  bottom: {
    textAlign: "center",
    marginTop: "30px",
    borderTop: "1px solid rgba(255,255,255,0.2)",
    paddingTop: "10px",
    color: "#bbb",
  },
};

export default Footer;