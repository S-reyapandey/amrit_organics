import React from 'react'

function Pagenotfound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Oops! The page you're looking for doesn't exist.</p>
      <button style={styles.button} onClick={() => (window.location.href = "/")}>Go Back Home</button>
    </div>
  )
}

const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f8f9fa",
      textAlign: "center",
      color: "#333",
    },
    title: {
      fontSize: "6rem",
      fontWeight: "bold",
      margin: 0,
    },
    message: {
      fontSize: "1.5rem",
      margin: "1rem 0",
    },
    button: {
      padding: "0.8rem 2rem",
      fontSize: "1rem",
      color: "#fff",
      backgroundColor: "#007bff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

export default Pagenotfound
